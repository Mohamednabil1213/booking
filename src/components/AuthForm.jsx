import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AuthForm = ({ onSuccess }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repass, setRepass] = useState('');

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setUsername('');
        setPassword('');
        setRepass('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || {};



        if (isLogin) {
            if (users[email] && users[email].password === password) {
                localStorage.setItem('currentUser', email);
                toast.success(' تسجيل الدخول ناجح');
                onSuccess && onSuccess();
            } else {
                toast.error(' بيانات الدخول غير صحيحة');
            }
        } else {
            if (!username.trim()) {
                toast(' أدخل اسم المستخدم');
                return;
            }
            if (password !== repass) {
                toast.error(' كلمة المرور غير متطابقة');
                return;
            }
            if (users[email]) {
                toast.error(' المستخدم موجود بالفعل');
                return;
            }

            users[email] = { username, password };
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', email);
            toast.success(' تم إنشاء الحساب وتسجيل الدخول');
            onSuccess && onSuccess();
        }

    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full p-3 rounded border border-gray-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                {!isLogin && (
                    <>
                        <input
                            type="text"
                            placeholder="اسم المستخدم"
                            className="w-full p-3 rounded border border-gray-300"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </>
                )}

                <input
                    type="password"
                    placeholder="كلمة المرور"
                    className="w-full p-3 rounded border border-gray-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {!isLogin && (
                    <input
                        type="password"
                        placeholder="تأكيد كلمة المرور"
                        className="w-full p-3 rounded border border-gray-300"
                        value={repass}
                        onChange={(e) => setRepass(e.target.value)}
                        required
                    />
                )}

                <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"
                >
                    {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
                </button>
            </form>

            <p className="text-sm text-center mt-4">
                {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}{' '}
                <button onClick={toggleMode} className="text-red-500 hover:underline">
                    {isLogin ? 'إنشاء حساب' : 'تسجيل الدخول'}
                </button>
            </p>
        </div>
    );
};

export default AuthForm;
