import { Jugador } from "./clase";


describe('Pruebas de clase', ()=>{

    let jugador = new Jugador();
    // const jugador = new Jugador();

    // beforeAll(); antes de que se ejecuten todas las pruebas
    beforeAll( () =>{
        // console.log('beforeAll');
        // jugador.hp= 100; esto estaria mal
    });
    
    // beforeEach(); se ejecuta antes de cada prueba
    beforeEach( () =>{
        // console.log('beforeEach');
        // jugador.hp= 100;
        jugador = new Jugador();
    });

    // afterAll(); se ejecuta cuando todas las pruebas finalizan
    afterAll( () =>{
        // console.log('afterAll');
        
    });

    // afterEach(); se ejecuta cada vez que termina cada una de las pruebas
    afterEach( () =>{
        // console.log('afterEach');
        jugador.hp= 100;
    });

    it('Debe retornar 80 de hp, si recibe 20 de daño', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);

        expect(resp ).toBe(80);
    });

    it('Debe retornar 50 de hp, si recibe 20 de daño', () => {
        
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);

        expect(resp ).toBe(50);
    });

    it('Debe retornar 0 de hp, si recibe 100 de daño o mas', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(100);

        expect(resp ).toBe(0);
    });

})