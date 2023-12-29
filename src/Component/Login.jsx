import React, { useContext, useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLogoGoogle} from 'react-icons/bi';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import app from '../Firebase/Firebase.init';
import { GithubAuthProvider } from "firebase/auth";
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ContextUser } from '../main';
const Login = () => {

    const NavigateToHome = useNavigate();
    const [,setAuth]=useContext(ContextUser)
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const auth = getAuth(app);

    const HandlewithSignin =(values)=>{
        
        const auth = getAuth();
        signInWithEmailAndPassword(auth,values.email, values.password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // localStorage.setItem('user', JSON.stringify(user));
        alert ('Login Successfull')
        window.location.href='/'
        // ...
    })
    .catch((error) => {
        
    });

    }
    const handleGoogleSignIn =()=>{
        signInWithPopup(auth, googleprovider)
        .then((result) => {
            setAuth(result?.user)
            NavigateToHome('/')
        }).catch((error) => {
            console.log("error", error);
        });
    }
    
    const handlegithubSignIn =()=>{
        signInWithPopup(auth, githubprovider)
        .then((result) => {
            setAuth(result?.user)
            NavigateToHome('/')
        }).catch((error) => {
            console.log("error", error);
        });
    }

    useEffect (()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setAuth(user)
            } else {
              setAuth('nodata')
            }
          });
    },[])
    
    return (
        
    <div className="bg-[url('/public/Img/sky1.jpg')] h-full w-full bg-no-repeat bg-cover flex justify-center items-center p-20">
        <div className="lg:w-2/5 h-2/5 flex flex-col gap-5 p-10 border bg-blue-800 bg-opacity-10 border-gray-600 border-2 rounded-md">
                <h1 className='text-5xl text-center font-extrabold'><span className='text-orange-600'>Medi</span>
                <span className='text-pink-600'>plus</span></h1>
                <h2 className="text-white font-bold text-4xl text-center ">User <span className='text-orange-600'>Sign</span> In</h2>
                <p className="text-center text-normal text-amber-200 font-medium">Hey Enter Your Details To Sign In Your Account</p>
                    <Form
                                name="basic"
                                labelRow={{
                                span: 10,
                                }}
                                wrapperRow={{
                                span: 8,
                                }}
                                style={{
                                maxWidth: 500,
                                }}
                                initialValues={{
                                remember: true,
                                }}
                                onFinish={HandlewithSignin}
                            >
                                <Form.Item
                                label={<span style={{ color: 'orange', fontSize: '20px' }}>Your E-Mail</span>}
                                name="email"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your email!',
                                    },
                                ]}
                                >
                                <Input />
                                </Form.Item>
                               
                                <Form.Item
                                label={<span style={{ color: 'orange', fontSize: '20px' }}>Password</span>}
                                name="password"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your password!',
                                    },
                                ]}
                                >
                                <Input.Password />
                                </Form.Item>

                                <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                                >
                                <Checkbox><span style={{ color: 'orange', fontSize: '24px'}}>Remeber Me</span></Checkbox>
                                </Form.Item>

                                <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 24,
                                }}
                                >
                                <Button 
                                type="primary" htmlType="submit">
                                    <span style={{ color: 'orange', fontSize: '16px'}}>Sign In</span>
                                </Button>
                                
                                </Form.Item>
                            </Form>
             <div className="flex flex-col items-center gap-5 ">
                    <h3 className="text-white text-xl font-medium">---or sign in with---</h3>
                <div className="flex gap-5 justify-center items-center">
                
                    <button onClick={handleGoogleSignIn} className="text-white border rounded px-3 py-1 hover:bg-blue-500 hover:border-blue-600 hover:text-orange-400 flex justify-center items-center gap-2 "><BiLogoGoogle size={20} color='orange'/> Google</button>
                    <button onClick={handlegithubSignIn} className="text-white border rounded px-3 py-1 hover:bg-blue-500 hover:border-blue-600 hover:text-orange-400 flex justify-center items-center gap-2 "><BsGithub size={20} color='orange'/> Github</button>
                </div>
             </div>
                    <h4 className="text-white  text-center">Have You No Account?<span className="text-red-800"><u><Link to='/SignUp'>SignUp</Link></u></span></h4>
             
        </div>
    </div>
    );
};

export default Login;