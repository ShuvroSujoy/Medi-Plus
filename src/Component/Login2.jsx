
import React, { useContext, useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { BiLogoGoogle} from 'react-icons/bi';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup,} from "firebase/auth";
import app from '../Firebase/Firebase.init';
import { GithubAuthProvider } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { ContextUser } from '../main';
const Login2 = () => {

    const handlewithRegistration=(values)=>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        alert ('Your SignUp Successful')
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

    }
    

    const NavigateToHome = useNavigate();
    const [,setAuth]=useContext(ContextUser)
    
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const auth = getAuth(app);
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
       
        <div className="bg-[url('/public/Img/sky.jpg')] h-full w-full bg-no-repeat bg-cover flex justify-center items-center p-20">
        <div className="border border-solid rounded-md lg:flex lg:w-5/6">
            <div className="lg:w-1/2 ">
                <img src="/public/Img/bgbuddy.jpg" alt="" className="h-full w-full" />
            </div>
            <div className="lg:w-1/2 flex flex-col gap-5 p-10 bg-blue-800 bg-opacity-20 bg-cover">
            <h1 className='text-5xl text-center font-extrabold'><span className='text-orange-600'>Medi</span>
            <span className='text-pink-600'>plus</span></h1>
                <h2 className="text-white font-bold text-4xl text-center ">User SignUp</h2>
                <p className="text-center text-normal text-amber-200 font-medium">Hey Enter Your Details To Create A Account</p>
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
                                onFinish={handlewithRegistration}
                               
                            >
                                 <Form.Item
                                 label={<span style={{ color: 'orange', fontSize: '20px' }}>Your Name :</span>}
                                name="name"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your name!',
                                    },
                                ]}
                                >
                                <Input />
                                </Form.Item>
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
                                    {
                                        min:6,
                                        message: 'Please Set Atleast 6 charecter',
                                    }
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
                                    <span style={{ color: 'orange', fontSize: '16px'}}>SignUp</span>
                                </Button>
                                </Form.Item>
                            </Form>
             <div className="flex flex-col items-center gap-5 ">
                <h3 className="text-white text-xl font-medium">---or sign in with---</h3>
                <div className="flex gap-10">
                    <button onClick={handleGoogleSignIn} className="text-white border rounded px-3 py-1 hover:border-blue-600 hover:text-orange-600 hover:bg-blue-500 flex justify-center items-center gap-2 "><BiLogoGoogle size={20} color='orange'/> Google</button>
                    <button onClick={handlegithubSignIn} className="text-white border rounded px-3 py-1 hover:border-blue-600 hover:text-orange-600 hover:bg-blue-500 flex justify-center items-center gap-2 "><BsGithub size={20} color='orange'/> Github</button>
                </div>
                <h4 className="text-white text-xl ">already have an account?<span className="text-red-800"><u> <Link to='/SignIn'>sign in</Link></u></span></h4>
             </div>
            </div>
        </div>
        </div>
    );
};

export default Login2;