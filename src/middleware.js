import { NextResponse } from 'next/server'
 
const user = true;
const cookeis = true;

export const  middleware = (request) =>{
    if(user && !cookeis){
        return  NextResponse.redirect(new URL('/login', request.url))
    }

}
 
export const config = {
  matcher: '/dashboard',
}