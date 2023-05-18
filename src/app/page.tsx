import MessageComponent from "./components/message-component";
import { conversationList } from "./conversation";
import Image from "next/image";
export default function Home() {
  let delay = 0;

  return (
    <main className="grid bottom-0 scroll-smooth">
      <div className="mx-20 lg:mx-60 sm: mx-1">
        <div className="mb-24">
          {conversationList.map(async (dialog, index) => {
            delay++;
            return (
              <MessageComponent
                key={index}
                string={dialog}
                delay={delay}
                mainDelay={delay - 1}
              />
            );
          })}
        </div>
        <div
          className="
              bg-slate-200
              flex
             fixed
             inset-x-0
             bottom-0
             p-4
             justify-center"
        >
          <textarea
            className="
          flex-1 
          form-textarea 
          h-12 px-4 
          py-3 
          rounded-l-lg 
          w-full 
          text-black 
          border-none"
            name="messageSend"
          />
          <button
            className="
          bg-lime-500
          active:bg-lime-700 
          hover:bg-lime-600  
          w-20 
          flex-none 
          form-button 
          rounded-r-lg 
          text-white"
          >
            <Image
              className="ml-6 invert"
              src={"/send.png"}
              alt={""}
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </main>
  );
}
