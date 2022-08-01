export const  rgxName = (value) => { 
    return !/^[a-zA-Z\s]*$/m.test(value)
}
// return !/^[a-zA-Z0-9\s]{3,45}$/m.test(value)