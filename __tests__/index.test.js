import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Index,{getStaticProps} from '../pages/index'
describe('Index',()=>{
    describe('component',()=>{
        it('se rederiza',()=>{
            const {getByTestId}=render(
                <Index pokemones={[
                    {name:'Chanchito Feliz',url:'/pokemon/detalle/1'}
                ]}/>
            )
            //escenario 1
            //const paragraph = screen.getByTestId('titulo')
            
            //escenario 2
            //validar que existe el titulo
            const paragraph = getByTestId('titulo')
            expect(paragraph).toBeInTheDocument()

            //validar que se crea un componente
            const chanchito = screen.getByText('Chanchito Feliz')
            expect(chanchito).toBeInTheDocument()
            
            //validar que la url se construya de manera correcta
            const url=chanchito.getAttribute('href')
            expect(url).toEqual('/pokemones/1')    
        })
    })
    describe('getStaticProps',()=>{
        it('return pokemons',async ()=>{
            //remplazar fetch, ya que esta solo funciona en el navegador
            //jest.fn, nos deja definir coomo funciona una funcion e inspeccionarla
            global.fetch=jest.fn()
                .mockImplementation(url =>{
                    expect(url).toBe('https://pokeapi.co/api/v2/pokemon?limit=151')
                    return new Promise(resolve => {
                        resolve({
                            json: ()=> Promise.resolve({
                                results:'lista de pokemones'
                            })
                        })
                    })
                })
            const {props} = await getStaticProps()
            expect (props.pokemones).toBe('lista de pokemones')
        })
    })
    
    
})