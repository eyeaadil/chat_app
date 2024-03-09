
import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
// import User from "../models/userModel.js"
export const sendMessage = async(req,res)=>{
 try {
    const {message} = req.body;
    const{id:receiverId }=req.params;
    console.log(receiverId)
    const senderId = req.user._id;

    // console.log(senderId)

    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
        });
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message,
    });

    if (newMessage) {
        conversation.messages.push(newMessage._id);
    }

    // SOCKET IO functionality 
    // await  conversation.save();
    // await  newMessage.save()


// both of conversation and newMessage will run simultaneously
    await Promise.all([conversation.save(),newMessage.save()])
    res.json(newMessage)

 } catch (error) {
    console.log("Error in sendMessage controller:",error.message)
    res.json({error:"Internal server error"})
 }
}


export const getMessages= async (req,res)=>{
    try {
        const{id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

      

        // console.log(conversation,"hjhjh");
        if (!conversation) return res.status(200).json([]);
     
		const messages = conversation.messages;

		res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMesssage Controller",error.message);
        res.json({error:"Internal Server error"});
    }
}