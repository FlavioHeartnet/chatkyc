import MessageComponent from './components/message-component'
import { conversationList } from './conversation' 
export default function Home() {
  let delay = 0

  return (
    <main className="grid fixed bottom-0 container mx-auto">
      <div className=' overflow-y-scroll overflow-visible'>
        {conversationList.map(async (dialog, index) => {
          delay++
          return <MessageComponent key={index} string = {dialog} delay={delay} mainDelay={delay - 1} />
        })}
      </div>
      <form className='
             relative
             inset-x-0
             bottom-0
             p-4'>
        <textarea className='form-textarea h-12 px-4 py-3 rounded-lg w-1/2 text-black' name='messageSend'/>
        <button className='form-button'></button>
      </form>
    </main>
  )
}
