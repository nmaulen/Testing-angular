import { obtenerRobots } from "./arreglos";



describe('Pruebas de arreglos', ()=>{

    it('Debe retornar al menos 3 robots', () => {
        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });
    
    it('Debe existir conan y haruko', () => {
        const res = obtenerRobots();
        expect(res).toContain('Conan');
        expect(res).toContain('Haruko')
    });
});