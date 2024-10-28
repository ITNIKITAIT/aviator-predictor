import Benefits from './Benefits';
import Instruction from './Instruction';
import Prices from './Prices';

const Main = () => {
    return (
        <main className="bg-main-mobile lg:bg-main bg-no-repeat bg-top bg-cover relative">
            <div className="absolute inset-0 bg-[#0E1013] opacity-70"></div>

            <div className="z-10 relative">
                <Benefits />
                <Instruction />
                <Prices />
            </div>
        </main>
    );
};

export default Main;
