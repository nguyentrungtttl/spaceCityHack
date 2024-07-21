import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ScrollView, View, Modal, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, Dimensions, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import { speak, isSpeakingAsync, stop } from "expo-speech";
import ChatBubble from "./chatBubble";
import { useNavigation } from '@react-navigation/native';

export default function ChatBot() {
    const navigation = useNavigation();

    // Set the header title or other options
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "Chatbot",
            headerBackTitleVisible: true,
        });
    }, [navigation]);

    const API_KEY = "AIzaSyCRlCe7UIDlKc2Ece-F_XwL7dQ-HhiPEQs";
    const [chat, setChat] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const defaultPrompt = "You are a mentor who guide me to build my profile through academic courses, competitions, and most important extracurricular activities. Explain to me why I might failed when I start a social project: Volunteering for local people to preserve traditions, landscapes, and culture at Ninh Binh city; and tell me how can I improve my skills for better chance of result. Do not write markdown. After every point just enter";
    const afterPrompt = "Do not write markdown. After every point just enter";

    useEffect(() => {
        // Set the initial default prompt
        const initialPrompt = "Hello my student! How can I help you today?";
        setChat([{ role: "model", parts: [{ text: initialPrompt }] }]);
    }, []);

    const handleUserInput = async () => {
        let updatedChat = [
            ...chat, {
                role: "user",
                parts: [{ text: userInput }]
            },
        ];
        
        setChat(updatedChat); // Display user input in the chat

        setLoading(true);
        try {
            const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
                {
                    contents: [
                        ...chat, {
                            role: "user",
                            parts: [{ text: defaultPrompt + userInput + afterPrompt }]
                        },
                    ]
                }
            );
            const modelResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
            if (modelResponse) {
                const updatedChatWithModel = [
                    ...updatedChat, {
                        role: "model",
                        parts: [{ text: modelResponse }]
                    }
                ];
                setChat(updatedChatWithModel);
                setUserInput("");
            }
        } catch (err) {
            setError(err);
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSpeech = async (text) => {
        if (isSpeaking) {
            stop();
            setIsSpeaking(false);
        } else {
            if (!(await isSpeakingAsync())) {
                speak(text);
                setIsSpeaking(true);
            }
        }
    };

    const renderChatItem = ({ item }) => (
        <ChatBubble role={item.role} text={item.parts[0].text} onSpeech={() => handleSpeech(item.parts[0].text)} />
    );

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? 'padding' : 'height'}>
            <View style={{ flex: 1, padding: 16, backgroundColor: "#f8f8f8" }}>
                <FlatList data={chat} renderItem={renderChatItem} keyExtractor={(item, index) => index.toString()} contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }} />
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, }}>
                    <TextInput style={{ flex: 1, height: 50, marginRight: 10, padding: 8, borderColor: "#333", borderWidth: 1, borderRadius: 25, color: "#333", backgroundColor: "#fff" }} placeholder="Type your question..." placeholderTextColor="grey" value={userInput} onChangeText={text => setUserInput(text)} />
                    <TouchableOpacity onPress={handleUserInput} style={{ padding: 10, backgroundColor: "#007AFF", borderRadius: 25 }}>
                        <Text style={{ color: "#fff", textAlign: "center", }}>Send</Text>
                    </TouchableOpacity>
                </View>
                {loading && <ActivityIndicator style={{ marginTop: 5 }} color="#333" />}
                {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>}
            </View>
        </KeyboardAvoidingView>
    );
}
