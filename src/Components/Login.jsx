import Bac from "./Lib/img/bac.png"

function Login() {
    return (
        <>
        <main className="main">
            <div className="container-xl">
                <div className="flex items-center gap-48">
                        <img className="h-full" src={Bac} alt="Bac" width={720} height={799}/>

                    <div className="flex flex-col">
                        <h1 className="text-xl pb-8 decoration-black font-sans font-bold">
                        <span className="text-sm font-sans font-normal">Welcome back</span> <br/>
                             Login to your account</h1>

                        <form className="form flex flex-col gap-10">
                            <label >
                                <span>Email</span><br/>
                                <input className="w-80 h-12 rounded-lg pl-4 font-serif" type="email" placeholder="Enter Your Email"/>
                            </label>

                            <label >
                                <span>Password</span><br/>
                                <input className="w-80 h-12 rounded-lg pl-4 font-serif" type="password" placeholder="Enter Your Password"/>
                            </label>

                            <label className="flex">
                                <input type="checkbox" /> <span className="pl-4">Remember me</span>
                                <a href="none"  className="pl-14">Forgot password?</a>
                            </label>

                            <button type="submit" className="bg-green-600 w-80 h-12 rounded-lg">Log in</button>
                            <button type="submit" className=" bg-black w-80 h-12 rounded-lg text-white">Or sign-in with google</button>

                        </form>

                        <div className="mt-6">
                            <a className="mt-6" href="#link">Dont have an account? Join free today</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Login