import SignInFrom from '@/components/SignIn';
import React, { Suspense } from 'react';

const SignInPage = () => {
    return (
        <div>
           <Suspense fallback={<div>Loading...</div>}>
           <SignInFrom />
           </Suspense>
        </div>
    );
};

export default SignInPage;