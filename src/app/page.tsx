import MessageComponent from './components/message-component'
import { conversationList } from './conversation' 
export default function Home() {
  let delay = 0

  return (
    <main className="grid min-h-screen items-center place-content-center justify-center">
      <div className='mt-20 lg:mx-60 sm: mx-1'>
        {conversationList.map(async (dialog, index) => {
          delay++
          return <MessageComponent key={index} string = {dialog} delay={delay} mainDelay={delay - 1} />
        })}
      </div>
      <form className='
              w-full
             fixed
             inset-x-0
             bottom-0
             p-4'>
        <input type='text' className='form-input px-4 py-3 rounded-lg w-full text-black' name='messageSend'/>
        <button className='form-button'></button>
      </form>
    </main>
  )
}
