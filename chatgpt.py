import openai

def setup():
    openai.api_key = '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'
    return [ {"role": "system", "content": "You are a pirate"} ]


def main():
    messages = setup()

    while True:
        message = input("User: ")
        if message:
            messages.append(
                {"role": "user", "content": message},
            )
            chat = openai.ChatCompletion.create(
                model="gpt-3.5-turbo", messages=messages
            )
        
        reply = chat.choices[0].message.content
        print(f"ChatGPT: {reply}")
        messages.append({"role": "assistant", "content": reply})


if __name__ == "__main__":
    main()