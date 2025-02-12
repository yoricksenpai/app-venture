"use server"

import { auth } from "@/auth"
import { parseServerActionResponse } from "./utils";
import  slugify  from 'slugify';
import { writeClient } from "@/sanity/lib/write-client";
export const createPitch = async (state: { error?: string; status: string }, form: FormData, pitch: string) => {
    const session = await auth();
    if(!session){
        return parseServerActionResponse({
            error: "Unauthorized",
            status: "ERROR"
        });
    }
        const {title, description, category, link} = Object.fromEntries(Array.from(form).filter(([key]) => key != 'pitch'));
        const slug = slugify(title as string, {lower: true ,strict: true});
        try{
            const startup = {
                title,
                description,
                category,
                image:link,
                pitch,
                slug:{
                    _type: slug,
                    current: slug,
                },
                author: {
                    _type: 'reference',
                    _ref: session?.id,
                },
            };
            const result = await writeClient.create({_type:'startup', ...startup});

            return parseServerActionResponse({
                _id: result._id,
                status: 'SUCCESS'
            })
        } catch(error) {
            console.log(error)
        }
    }
