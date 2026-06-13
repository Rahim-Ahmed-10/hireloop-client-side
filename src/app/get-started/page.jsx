import SignupForm from '@/components/SignUp';
import React, { Suspense } from 'react';

const SignInPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
            <SignupForm />
            </Suspense>
        </div>
    );
};

export default SignInPage;