import { proPilotProperties } from '../constans';
import { cn } from '../libs/cn';
import Button from '../ui/Button';
import { IoMdCheckmark } from 'react-icons/io';

const ProPilot = () => {
    return (
        <div className="py-8 px-2 2xl:py-16 2xl:px-11 bg-[#1F2329] rounded-2xl border-[2px] border-transparent hover:border-lightgreen/50 max-w-[570px] w-full mx-auto transition-all duration-150">
            <h1 className="font-grotesk text-[28px] xl:text-[32px] font-bold leading-[33.6px] xl:leading-[38px] text-center pb-4">
                Pro Pilot
            </h1>
            <p className="text-center w-fit mx-auto rounded-lg bg-lightgreen p-1 font-semibold text-[16px] leading-[21px] text-[#1F2329]">
                Max Profit
            </p>
            <p className="font-grotesk text-[28px] xl:text-[32px]  font-bold leading-[33.6px] xl:leading-[38px] text-center pt-4">
                $175
            </p>
            <p className="mt-4 text-[14px] xl:text-[16px] font-normal leading-[18.34px] xl:leading-[21px] text-center">
                Идеально подходит для работающих проектов
            </p>
            <ul className="my-8 flex flex-col gap-4 xl:mb-[64px]">
                {proPilotProperties.map((property) => (
                    <li className="flex items-center justify-between">
                        <div className="flex gap-1.5 items-center">
                            <div
                                className={cn(
                                    'p-[3px] rounded-full bg-lightgreen',
                                    property.isDisabled && 'bg-[#454A53]'
                                )}>
                                <IoMdCheckmark className="text-black h-3 w-3" />
                            </div>
                            <span
                                className={cn(
                                    'text-[14px] xl:text-[16px] font-semibold leading-[18.34px] xl:leading-[21px] text-left',
                                    property.isDisabled && 'text-[#454A53]'
                                )}>
                                {property.name}
                            </span>
                        </div>
                        {property.count && (
                            <span className="text-[14px] xl:text-[16px] leading-[18.34px] xl:leading-[21px] text-center">
                                {property.count === Infinity
                                    ? '∞'
                                    : property.count}
                            </span>
                        )}
                    </li>
                ))}
            </ul>

            <Button className="mx-auto">Выбрать план</Button>
        </div>
    );
};

export default ProPilot;
