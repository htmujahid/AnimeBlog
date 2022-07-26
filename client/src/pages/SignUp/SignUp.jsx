import Input from '../../widgets/Inputs/Input'
import Button from '../../widgets/Buttons/Button'
export default function SignUp(){
    return (
        <div className="background-img">
            <div className='flex items-center justify-center h-full flex-col gap-12 '>
                <div className='flex items-center justify-center flex-col gap-6'>
                    <Input label="Name" type="text" name="name" id="name" placeholder="Enter Your Name"/>
                    <Input label="Email" type="email" name="email" id="email" placeholder="Enter Your Email"/>
                    <Input label="Password" type="password" name="password" id="password" placeholder="Enter Your Password"/>
                </div>
                <div>
                    <Button label="Sign Up"/>
                </div>
            </div>
        </div>
    )
}