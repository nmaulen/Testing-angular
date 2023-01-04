import { mensaje } from "./string";
// El describe sirve para agrupar pruebas
// describe('pruebas de strings');

// el it(''); es para hacer una evaluacion en concreto
// it('Debe regresar un string');


describe('Pruebas de Strings', ()=>{
    
    it('Debe regresar un string', () => {
        const resp = mensaje( 'Fernando' );
        expect ( typeof resp ).toBe('string')
    });

    it('Debe retornar un saludo con el nombre enviado', () => {
        const nombre = 'Juan';
        const resp = mensaje( nombre );
        expect ( resp ).toContain(nombre);
    });
});