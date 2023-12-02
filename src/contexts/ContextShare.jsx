import React, { createContext, useState } from 'react'
export const addProjectResponseContext = createContext()
export const editProjectResponseContext = createContext()
function ContextShare({ children }) {
    const [addProjectResponse, setAddProjectResponse] = useState({})
    const [editProjectResponese, setEditProjectResponse] = useState({})
    return (
        <>
            <addProjectResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
                <editProjectResponseContext.Provider value={{ editProjectResponese, setEditProjectResponse }}>
                    {children}
                </editProjectResponseContext.Provider>
            </addProjectResponseContext.Provider>
        </>
    )
}

export default ContextShare