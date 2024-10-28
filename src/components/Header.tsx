import Button from '../ui/Button';
import Container from '../ui/Container';
import Navbar from './Navbar';
import { RiArrowRightLine } from 'react-icons/ri';

const Header = () => {
    return (
        <section className="bg-mobile-hero-pattern lg:bg-hero-pattern bg-no-repeat bg-bottom bg-cover pb-0 md:pb-[80px] xl:pb-[120px]">
            <Navbar />
            <Container>
                <div className="lg:max-w-[600px] xl:max-w-[740px] mt-[60px] md:mt-[80px] xl:mt-[160px]">
                    <h1 className="font-grotesk text-[32px] sm:text-[44px] font-extrabold leading-[41px] md:leading-[57.64px] text-center lg:text-left text-white">
                        Повысь конверсию из смс в депозит с помощью
                        <span className="block text-lightgreen">
                            Aviator Predictor
                        </span>
                    </h1>
                    <h3 className="font-montserrat text-[20px] sm:text-[24px] font-semibold leading-[26px] sm:leading-[31.44px] text-center lg:text-left text-white mt-6 w-full lg:w-4/5 xl:w-full">
                        Aviator Predictor - твой маленький секрет к большему
                        среднему чеку игрока.
                    </h3>
                    <p className="py-8 sm:py-12 font-montserrat text-[16px] sm:text-[20px] text-white leading-[21px] sm:leading-[26.2px] text-center lg:text-left w-full lg:w-4/5 xl:w-full">
                        Внедри в свою воронку Aviator Predictor и почувствуй
                        разницу с уникальным контентом, уникальным софтом и
                        новым подходом в своей воронке.
                    </p>
                    <Button className="flex items-center !py-5 !m-auto lg:!m-0">
                        Связаться с нами
                        <RiArrowRightLine className="text-[20px] sm:text-[30px]" />
                    </Button>

                    <img
                        src="/img/Devices.png"
                        alt="devices"
                        className="max-w-[700px] w-full block m-auto mt-12 lg:hidden"
                    />
                </div>

                <div className="mt-[48px] lg:mt-[120px]">
                    <p className="mb-3 text-[16px] sm:text-[20px] leading-[26.2px] text-center lg:text-left">
                        Доступные темы самого предиктора:
                    </p>

                    <div className="grid grid-cols-2 justify-items-center sm:flex items-center justify-center lg:justify-start gap-6 sm:gap-8">
                        <img
                            src="/img/logos/1win-logo.png"
                            alt="logo"
                            className="max-w-[140px] sm:max-w-[100px]"
                        />
                        <img
                            src="/img/logos/1xbet-logo.png"
                            alt="logo"
                            className="max-w-[150px] sm:max-w-[120px]"
                        />
                        <img
                            src="/img/logos/pin-up-logo.png"
                            alt="logo"
                            className="max-w-[120px] sm:max-w-[95px]"
                        />
                        <img
                            src="/img/logos/mobet-logo.png"
                            alt="logo"
                            className="max-w-[170px] sm:max-w-[140px]"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Header;
