import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaMessage } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

export default function ChatBox() {
  const [chatBoxActive, setChatBoxActive] = useState(false);

  return (
    <div>
      <div
        className="fixed bottom-4 right-4 text-xl cursor-pointer h-12 w-12 rounded-full bg-sky-500 flex items-center justify-center text-white hover:scale-125 transition"
        onClick={() => setChatBoxActive(!chatBoxActive)}
      >
        {chatBoxActive ? <RxCross1 /> : <FaMessage />}
      </div>

      <div>{chatBoxActive && <ChatBoxContent />}</div>
    </div>
  );
}

const ChatBoxContent = () => {
  return (
    <div
      data-aos="zoom-in"
      className="min-h-[300px] w-[280px] md:min-h-[400px] md:min-w-[250px] shadow-xl border-2  rounded-md bg-white fixed bottom-20 right-2 md:right-10  flex flex-col justify-between"
    >
      <div className="w-full h-28 bg-blue-500 rounded-md text-2xl pt-4 text-white">
        <span className="flex items-center justify-center gap-3">
          <FaMessage />
          <h1 className="">Chat with us</h1>
        </span>
        <p className="text-center text-[12px] text-white">
          typically reply's with in a minutes
        </p>
      </div>
      <div className="flex w-full min-h-[288px] flex-col justify-between">
        <div>
          <MessageBox />
          <UserMessage />
        </div>
        <div>
          <InputBox />
        </div>
      </div>
    </div>
  );
};

const MessageBox = () => {
  return (
    <div className="w-full flex  gap-2 px-2 min-h-8 py-2">
      <span className="text-2xl text-blue-500">
        <CgProfile />
      </span>
      <span>
        <p className="text-[12px] opacity-70">
          welcome to bookself. Please let us know how can we help you?
        </p>
      </span>
    </div>
  );
};

const UserMessage = () => {
  return (
    <div className="w-full flex gap-2 justify-end px-2 min-h-8 py-2">
      <span>
        <p className="text-[12px] opacity-70">can I get some books for free?</p>
      </span>
      <span className="text-2xl text-blue-500">
        <CgProfile />
      </span>
    </div>
  );
};

const InputBox = () => {
  return (
    <div className="border-t-2 flex items-center justify-between px-2">
      <input
        type="text"
        name="input-message"
        id="input-message"
        placeholder="compose your message"
        className="h-10 w-full outline-none border-none"
      />
      <span className="text-2xl cursor-pointer text-blue-500">
        <FiSend />
      </span>
    </div>
  );
};
