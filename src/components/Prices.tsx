import Container from '../ui/Container';
import LitePilot from './LitePilot';
import PremiumPilot from './PremiumPilot';
import ProPilot from './ProPilot';

const Prices = () => {
    return (
        <section className="py-[60px] lg:pt-[32px] pb-[180px]">
            <Container>
                <h1 className="text-lightgreen font-grotesk text-[32px] lg:text-[36px] font-extrabold leading-[41.92px] lg:leading-[47px] text-left md:text-center">
                    Планы для каждого игрока.
                </h1>
                <p className="mt-4 text-[16px] lg:text-[20px] font-bold leading-[20.96px] lg:leading-[26px] max-w-[850px] mx-auto text-left md:text-center">
                    Найди план, который соответствует твоим потребностям, и
                    начни использовать Aviator Predictor сегодня, чтобы улучшить
                    свой опыт игры.
                </p>

                <div className="mt-[60px] grid grid-cols-1 gap-4 lg:grid-cols-3 xl:gap-8">
                    <LitePilot />
                    <ProPilot />
                    <PremiumPilot />
                </div>
            </Container>
        </section>
    );
};

export default Prices;
