// Chat service - calls server-side API to protect API key

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (response.status === 429) {
      return "I'm getting a lot of messages right now. Please wait a moment before sending another message.";
    }

    if (!response.ok) {
      const error = await response.json();
      return error.error || "I'm having trouble processing that right now. Please try again.";
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Chat API error:", error);
    return "I'm having trouble connecting right now. Please try again in a moment.";
  }
};
