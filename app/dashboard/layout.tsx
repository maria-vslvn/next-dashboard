import SideNav from '@/app/ui/dashboard/sidenav';
import { ReactNode } from 'react';

type Props = {
    chilren: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className="flex h-screen fle-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md: w-64">
                <SideNav />
            </div>
            <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}