import { supabase } from '../../supabase'
import { serverLogs } from '@/data/data';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export const userLoginWithPass = async (formData: Form Data) => {
    "use server"

    // const FormSchema = z.object({
    //     email: z.string().email(),
    //     passwordOne: z.string().min(8),
    //     // passwordTwo: z.string().min(8).refine((value) => value === formData.get('passwordOne'), {
    //     //     message: "Passwords do not match"
    //     // })
    // })

    const email = formData.get('email')?.toString()
    const password = formData.get('password')?.toString()

    if (!email || !password) return;
    

    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      console.log("This is where success should be...\n", data)

    } catch (error) {
      console.log("This is error",error)
    }
}

export const userSignUp = async (formData: FormData) => {
    "use server"

    console.log(formData)

    // const email = formData.get('email')?.toString()
    // const passwordOne = formData.get('passwordOne')?.toString()
    // const passwordTwo = formData.get('passwordTwo')?.toString()

    // if (!email || !passwordOne || !passwordTwo) return;

    const email = 'jaylonignacio@gmail.com';
    const password = 'password123';

    if (!email || !password ) return;
    

    try {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
      console.log("This is where success should be...\n", data)

    } catch (error) {
      console.log(error)
    }
}



