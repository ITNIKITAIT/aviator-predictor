import { useState } from 'react';
import Container from '../ui/Container';
import { cn } from '../libs/cn';
import Button from '../ui/Button';

type Mode = 'aviator' | 'mines';

const Navbar = () => {
    const [mode, setMode] = useState<Mode>('aviator');

    return (
        <header>
            <Container>
                <div className="flex items-center justify-between h-[60px] md:h-[80px] lg:h-[100px]">
                    <img
                        src="./img/LOGO-ROCKET.png"
                        alt="logo"
                        className="cursor-pointer max-w-[140px] md:max-w-[170px] lg:max-w-[225px]"
                    />
                    <div className="border-[1px] md:border-[2px] text-[#868686] border-lightgreen rounded-[8px] md:rounded-[16px] p-0.5 md:p-1 flex items-center bg-[#131519]">
                        <div
                            onClick={() => setMode('aviator')}
                            className={cn(
                                'text-[10px] md:text-[20px] leading-[13px] md:leading-[26.2px] cursor-pointer text-center px-[22px] py-1 md:px-[51px] md:py-2 rounded-[5px] md:rounded-[12px] transition-all duration-200',
                                mode === 'aviator' &&
                                    'bg-lightgreen font-semibold text-[#13161B] cursor-default'
                            )}>
                            Aviator
                        </div>
                        <div
                            onClick={() => setMode('mines')}
                            className={cn(
                                'text-[10px] md:text-[20px] cursor-pointer leading-[13px] md:leading-[26.2px] text-center px-[22px] py-1 md:px-[51px] md:py-2 rounded-[5px] md:rounded-[12px] transition-all duration-200',
                                mode === 'mines' &&
                                    'bg-lightgreen font-semibold text-[#13161B] cursor-default'
                            )}>
                            Mines
                        </div>
                    </div>
                    <Button className="!hidden lg:!block">
                        Связаться с нами
                    </Button>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
