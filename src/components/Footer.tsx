import Container from '../ui/Container';

const Footer = () => {
    return (
        <footer className="bg-[#13161B] lg:bg-[#06080C] py-8 lg:py-[70px]">
            <Container>
                <div className="flex flex-col items-center justify-between gap-7 lg:flex-row">
                    <img
                        src="/img/LOGO-ROCKET.png"
                        alt="logo"
                        className="max-w-[225px] cursor-pointer"
                    />
                    <div className="flex items-center gap-2 font-semibold text-[16px] lg:text-[20px] leading-[20px] lg:leading-[25px] py-[14px] px-[28px] border-[2px] border-lightgreen rounded-[7px] hover:opacity-90 cursor-pointer lg:py-[16px] lg:px-[32px]">
                        Написать в Telegram{' '}
                        <img
                            src="/img/tg-svg.svg"
                            className="lg:w-6"
                            alt="tg"
                        />
                    </div>
                </div>
                <div className="mt-8 opacity-40 text-center text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] lg:text-left">
                    <p>
                        Твой секрет к большим победам — предсказывай, играй,
                        побеждай!
                    </p>
                    <p className="mt-3">
                        Открой силу предсказания с нашим эксклюзивным Aviator
                        Predictor. Получи преимущество, предсказывая, когда
                        взорвётся самолёт в популярной игре Aviator.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
