from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo

web_up = WebAppInfo(url="https://zokirovabdulvoris.github.io/mudul_11.github.io/")


app_kb = ReplyKeyboardMarkup(keyboard=[
    [KeyboardButton(text='Mini Up', web_app=web_up)]
], resize_keyboard=True)