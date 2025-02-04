
// "use client"
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X } from 'lucide-react';
// import Header2 from '@/components/Header2';

// const signUpSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   email: z.string().min(1, "Email is required").email("Invalid email"),
//   password: z.string().min(6, "Password must be at least 6 characters").max(20, "Password must be less than 20 characters"),
// }).strict();

// type SignUpFormData = z.infer<typeof signUpSchema>;

// const SignUpForm = () => {
//   const router = useRouter();
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const { register, handleSubmit, formState: { errors }, reset } = useForm<SignUpFormData>({
//     resolver: zodResolver(signUpSchema),
//   });

//   const onSubmit = async (data: SignUpFormData) => {
//     try {
//       const response = await fetch('/api/form', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       // const newRes = response.json()
//       // if (newRes.success) {
//       //   localStorage.setItem("token", newRes.token);
//       //   toast.success("You are successfully logged in");
//       // } else {
//       //   toast.error(response.error);
//       // }

//       if (response.ok) {
//         setIsSuccess(true);
//         router.push('/')
//         reset();

//       } else {
//         const error = await response.json();
//         setIsError(true);
//         setErrorMessage(error.message);
//       }
//     } catch (err) {
//       setIsError(true);
//       setErrorMessage('An unexpected error occurred. Please try again.');
//     }
//   };

//   const closeModal = () => {
//     setIsSuccess(false);
//     setIsError(false);
//     setErrorMessage('');
//   };

//   return (
//     <>
//      <link
//             href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
//             rel="stylesheet"
//           />
//    <Header2/>
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//             <input
//               {...register('name')}
//               type="text"
//               id="name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Your name"
//             />
//             {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               {...register('email')}
//               type="email"
//               id="email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="your@email.com"
//             />
//             {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               {...register('password')}
//               type="password"
//               id="password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="••••••••"
//             />
//             {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>

//       <AnimatePresence>
//         {(isSuccess || isError) && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full m-4"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className={`text-lg font-semibold ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
//                   {isSuccess ? 'Success!' : 'Error'}
//                 </h3>
//                 <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
//                   <X size={24} />
//                 </button>
//               </div>
//               <p className="text-gray-700">
//                 {isSuccess
//                   ? 'Your account has been created successfully.'
//                   : errorMessage || 'An error occurred. Please try again.'}
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//     </>
//   );
// };

// export default SignUpForm;

"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import Header2 from '@/components/Header2';

const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters").max(20, "Password must be less than 20 characters"),
}).strict();

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        setIsError(true);
        setErrorMessage(result.message || 'An error occurred. Please try again.');
      }
    } catch {
      setIsError(true);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage('');
  };

  return (
        <>
         <link
                href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                rel="stylesheet"
              />
       <Header2/>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  {...register('password')}
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
              >
                {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
              ) : null}
              {isLoading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </form>
          </div>
    
          <AnimatePresence>
            {(isSuccess || isError) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full m-4"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className={`text-lg font-semibold ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                      {isSuccess ? 'Success!' : 'Error'}
                    </h3>
                    <button onClick={closeModal} className="text-gray-400 hover:text-gray-600" title="Close">
                      <X size={24} />
                    </button>
                  </div>
                  <p className="text-gray-700">
                    {isSuccess
                      ? 'Your account has been created successfully.'
                      : errorMessage || 'An error occurred. Please try again.'}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </>
      );


  };

export default SignUpForm;