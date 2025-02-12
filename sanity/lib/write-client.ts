import 'server-only'

import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
    projectId: projectId,
    dataset: dataset,
    apiVersion: apiVersion,
    useCdn: false,
    token : token
    // Add token if you have one
})

if(!writeClient.config().token){
    throw  Error( " Write token not found. ")
}
