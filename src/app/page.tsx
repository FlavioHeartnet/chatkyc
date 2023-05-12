import MessageComponent from './components/message-component'
import { chatStrings } from './strings/strings'
export default function Home() {
  return (
    <main className="grid min-h-screen items-center place-content-center justify-center">
      <div className='mt-20 lg:mx-60 sm: mx-1'>
        <MessageComponent string = {chatStrings.us.explanationText1}/>
        <MessageComponent string = {chatStrings.us.explanationText2}/>
      </div>
    </main>
  )
}
