import Container from '../ui/Container';

const Instruction = () => {
    return (
        <section className="pt-[120px]">
            <Container>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="lg:max-w-[550px] xl:max-w-[700px]">
                        <h1 className="font-grotesk text-[32px] md:text-[36px] text-lightgreen font-extrabold leading-[41.92px] md:leading-[47px] text-left mb-8 lg:mb-10">
                            Как работает Aviator Predictor?
                        </h1>

                        <div className="flex flex-col items-center lg:flex-row gap-4 lg:items-start mb-8 lg:mb-10 lg:min-w-[64px]">
                            <div className="flex shrink-0 items-center justify-center w-[60px] h-[60px] lg:w-[64px] lg:h-[64px] bg-[#272D35] rounded-full border-[2px] border-[#101010] text-[45px] md:text-[48px] font-semibold text-center text-lightgreen">
                                1
                            </div>
                            <div>
                                <h2 className="text-[16px] md:text-[20px] font-bold leading-[20.96px] md:leading-[26px] text-left mb-4">
                                    Запуск игры и наблюдение за полетом
                                    самолета:
                                </h2>
                                <p className="text-[14px] md:text-[16px] font-normal leading-[18.34px] md:leading-[21px] text-left">
                                    Игра стартует с взлета самолета, при этом
                                    множитель выигрыша начинает расти. Задача —
                                    забрать выигрыш до того, как самолет улетит.
                                    Но в вашем приложении предусмотрен
                                    предиктор, который анализирует данные и
                                    помогает предугадать, когда самолет исчезнет
                                    с экрана.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:flex-row gap-4 lg:items-start mb-8 lg:mb-10">
                            <div className="flex shrink-0 items-center justify-center w-[60px] h-[60px] lg:w-[64px] lg:h-[64px] bg-[#272D35] rounded-full border-[2px] border-[#101010] text-[45px] font-semibold leading-[58.95px] text-center text-lightgreen">
                                2
                            </div>
                            <div>
                                <h2 className="text-[16px] font-bold leading-[20.96px] text-left mb-4">
                                    Работа предиктора и рекомендации для игрока:
                                </h2>
                                <p className="text-[14px] font-normal leading-[18.34px] text-left">
                                    Предиктор, используя алгоритмы и
                                    исторические данные, выдает предполагаемую
                                    точку остановки самолета. На основе этой
                                    информации игрок может выбрать, в какой
                                    момент нажать кнопку «забрать», чтобы
                                    зафиксировать выигрыш до завершения раунда.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:flex-row gap-4 lg:items-start mb-8 lg:mb-10">
                            <div className="flex shrink-0 items-center justify-center w-[60px] h-[60px] lg:w-[64px] lg:h-[64px] bg-[#272D35] rounded-full border-[2px] border-[#101010] text-[45px] font-semibold leading-[58.95px] text-center text-lightgreen">
                                3
                            </div>
                            <div>
                                <h2 className="text-[16px] font-bold leading-[20.96px] text-left mb-4">
                                    Начало нового раунда с обновленными
                                    предсказаниями:
                                </h2>
                                <p className="text-[14px] font-normal leading-[18.34px] text-left">
                                    После каждого завершенного раунда предиктор
                                    обновляет данные, предлагая новое
                                    предположение для следующего полета. Игрок
                                    может снова попробовать предсказать
                                    оптимальный момент для завершения игры,
                                    следуя рекомендациям предиктора и наблюдая
                                    за динамикой роста множителя.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative max-w-[850px] w-full mx-auto lg:m-0">
                        <img
                            src="/img/Ellipse.png"
                            alt="laptop"
                            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[0]"
                        />
                        <img
                            src="/img/laptop.png"
                            alt="laptop"
                            className="w-full relative z-10"
                        />
                    </div>
                </div>

                <div className="mt-[120px] xl:mt-[180px] max-w-[1200px] mx-auto px-4 py-8 lg:py-4 bg-[#1F2329] rounded-2xl text-[14px] md:text-[16px] font-normal leading-[18.34px] text-center">
                    В нашем продукте точно такой же интерфейс как и в
                    оригинальном слоте, со всеми поддерживаемыми валютами и
                    английским языком (скоро обновление с многими языками) и
                    новым интерфейсом почти под все продукты на рынке.
                </div>
            </Container>
        </section>
    );
};

export default Instruction;
