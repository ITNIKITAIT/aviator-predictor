import Container from '../ui/Container';

const Benefits = () => {
    return (
        <section className="pt-[120px] md:pt-[60px] xl:pt-0">
            <Container>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-9 xl:grid-cols-4">
                    <div className="relative px-3 pt-12 pb-8 bg-[#13161B] rounded-2xl">
                        <h2 className="font-grotesk text-lightgreen text-[16px] 2xl:text-[20px] 2xl:leading-[26px] font-bold leading-[20.96px] text-center">
                            Оригинальный интерфейс
                        </h2>
                        <p className="mt-3 text-[14px] leading-[18.34px] 2xl:text-[16px] 2xl:leading-[21px] text-center text-secondary">
                            Полностью копия реального авиатора, который видит
                            перед собой игрок
                        </p>

                        <div className="absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] bg-[#272D35] rounded-full border-[2px] border-[#101010]">
                            <img
                                src="/img/benefits/focus.svg"
                                alt="focus"
                                className="lg:w-[55px]"
                            />
                        </div>
                    </div>
                    <div className="relative px-3 pt-12 pb-8 bg-[#13161B] rounded-2xl">
                        <h2 className="font-grotesk text-lightgreen text-[16px] 2xl:text-[20px] 2xl:leading-[26px] font-bold leading-[20.96px] text-center">
                            Простота использования
                        </h2>
                        <p className="mt-3 text-[14px] leading-[18.34px] 2xl:text-[16px] 2xl:leading-[21px] text-center text-secondary">
                            Простой и легкий интерфейс, который позволит
                            внедрить наш продукт почти моментально в Вашу
                            воронку и повысить конверт уже сейчас.
                        </p>

                        <div className="absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] bg-[#272D35] rounded-full border-[2px] border-[#101010]">
                            <img
                                src="/img/benefits/smile.svg"
                                alt="focus"
                                className="lg:w-[55px]"
                            />
                        </div>
                    </div>
                    <div className="relative px-3 pt-12 pb-8 bg-[#13161B] rounded-2xl">
                        <h2 className="font-grotesk text-lightgreen text-[16px] 2xl:text-[20px] 2xl:leading-[26px] font-bold leading-[20.96px] text-center">
                            Поддержка мульти-валют
                        </h2>
                        <p className="mt-3 text-[14px] leading-[18.34px] 2xl:text-[16px] 2xl:leading-[21px] text-center text-secondary">
                            Поддержка всех валют мира, от евро до песо.
                        </p>

                        <div className="absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] bg-[#272D35] rounded-full border-[2px] border-[#101010]">
                            <img
                                src="/img/benefits/coins-fill.svg"
                                alt="focus"
                                className="lg:w-[55px]"
                            />
                        </div>
                    </div>
                    <div className="relative px-3 pt-12 pb-8 bg-[#13161B] rounded-2xl">
                        <h2 className="font-grotesk text-lightgreen text-[16px] 2xl:text-[20px] 2xl:leading-[26px] font-bold leading-[20.96px] text-center">
                            Подтвержденные результаты
                        </h2>
                        <p className="mt-3 text-[14px] leading-[18.34px] 2xl:text-[16px] 2xl:leading-[21px] text-center text-secondary">
                            Довольные лиды - довольный рекл, все в шоколаде -
                            выплата в кармане.
                        </p>

                        <div className="absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] bg-[#272D35] rounded-full border-[2px] border-[#101010]">
                            <img
                                src="/img/benefits/users.svg"
                                alt="focus"
                                className="lg:w-[55px]"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Benefits;
