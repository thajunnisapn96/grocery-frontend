import { BASE_URL } from "./baseurl";
import {commonAPI} from "./commonAPI";

// register
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

// login
export const loginAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//Add project

export const AddProjectApi = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}

// home projects

export const homeProjectAPI = async ()=>{
    return await commonAPI("GET", `${BASE_URL}/project/home`,"","" )
}
// all projects

export const allProjectsAPI = async (searchkey,reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/project/all?search=${searchkey}`, "", reqHeader)
}

// userproject

export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI('GET', `${BASE_URL}/user/allprojects`,"",reqHeader)
}

//editproject API

export const editProjectAPI = async (projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/project/edit/${projectId}`,reqBody,reqHeader)
}

export const deleteProjectAPI = async (projectId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/project/remove/${projectId}`,{},reqHeader)
}

export const editUserAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/user/edit`,reqBody,reqHeader)
}