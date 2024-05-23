# import os
# from aiogram import Bot
# from aiogram.types import Message, LabeledPrice, PreCheckoutQuery
#
# from dotenv import load_dotenv
#
#
# load_dotenv()
#
#
# PROVIDER_TOKEN = os.getenv('PROVIDER_TOKEN')
#
# async def order(message: Message, bot: Bot):
#     await bot.send_invoice(
#         chat_id=message.chat.id,
#         title="Telegram bot orqali to'lov!",
#         description="desc",
#         provider_token=PROVIDER_TOKEN,
#         currency="sum",
#         payload="Ichki malumot",
#         prices=[
#             LabeledPrice(label="Skidka", amount=-2),
#             LabeledPrice(label="Bonus", amount=-1)
#         ]
#     )
#
# async def pre_checkout(pre_checkout_query: PreCheckoutQuery, bot: Bot):
#     await bot.answer_pre_checkout_query(pre_checkout_query.id, ok=True)
#
