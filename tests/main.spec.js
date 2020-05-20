import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/Mod#4 - Concept and Practice/calc';

describe('Calc', () => {
    describe('Sum', () => {
        it('should return 4 when `sum(2,2)`', () => {
            expect(sum(2,2)).to.be.equal(4)
        })
    })
    
    describe('Sub', () => {
        it('should return 4 when `sub(2,6)`', () => {
            expect(sub(6,2)).to.be.equal(4)
        })
    })
    
    describe('Mult', () => {
        it('should return 4 when `sum(2,2)`', () => {
            expect(mult(2,2)).to.be.equal(4)
        })
    })

    describe('Div', function() {
        it('should return 4 when `sum(16,4)`', function () {
            expect(div(16,4)).to.be.equal(4)
        })

        it('should return `Não é possível divisão por zero!` when divide by 0', function () {
            expect(div(16,0)).to.be.equal(`Não é possível divisão por zero!`)
        })
    })
});
