
'use client';

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useActionState, useEffect } from 'react';
import { register, type AuthState } from '@/app/auth/actions';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const initialState: AuthState = {};

export default function RegisterPage() {
    const [state, formAction, isPending] = useActionState(register, initialState);
    const { toast } = useToast();
    const router = useRouter();
    
    useEffect(() => {
        if (state?.error) {
            toast({
                title: 'Ошибка регистрации',
                description: state.error,
                variant: 'destructive',
            });
        }
        if (state?.message) {
            toast({
                title: 'Успешно!',
                description: state.message,
            });
            router.push('/login');
        }
    }, [state, toast, router]);

    return (
        <div className="bg-background text-foreground flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex items-center justify-center py-12 bg-secondary/30">
                <Card className="w-full max-w-md shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl text-primary">Создание аккаунта</CardTitle>
                        <CardDescription>Присоединяйтесь к тысячам компаний, которые уже выигрывают тендеры</CardDescription>
                    </CardHeader>
                    <form action={formAction}>
                        <CardContent className="space-y-4">
                             <div className="space-y-2">
                                <Label htmlFor="name">Ваше имя</Label>
                                <Input id="name" name="name" placeholder="Иван Петров" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" placeholder="primer@email.com" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Пароль</Label>
                                <Input id="password" name="password" type="password" required />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                            <Button className="w-full" type="submit" disabled={isPending}>
                               {isPending ? 'Регистрация...' : 'Зарегистрироваться бесплатно'}
                            </Button>
                             <p className="text-xs text-muted-foreground text-center">
                                Нажимая кнопку, вы соглашаетесь с нашими <Link href="#" className="underline hover:text-primary">Условиями обслуживания</Link> и <Link href="#" className="underline hover:text-primary">Политикой конфиденциальности</Link>.
                            </p>
                        </CardFooter>
                    </form>
                     <div className="text-center pb-6">
                        <Link href="/login" className="text-sm text-primary hover:underline">
                            Уже есть аккаунт? Войти
                        </Link>
                    </div>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
