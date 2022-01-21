import {
  navigateToLocation
} from '../../support/helpers';

const genericWhatIsTheProblemOptions = () => {
  it('displays the repair problem question', () => {
    cy.contains('What is the problem?');
  });

  it('displays a "walls" option', () => {
    cy.contains('Walls, floor or ceiling, excluding damp');
  });

  it('displays a "damaged doors" option', () => {
    cy.contains('Damaged or stuck doors');
  });

  it('displays a "electrics" option', () => {
    cy.contains('Electrics, including lights and switches');
  });

  it('displays a "windows" option', () => {
    cy.contains('Damaged or stuck windows');
  });

  it('displays a "damp or mould" option', () => {
    cy.contains('Damp or mould');
  });
}
describe('repairProblem', () => {

  context('kitchen', () => {
    before(() => {
      navigateToLocation()
      cy.contains('Kitchen').click();
      cy.get('button').click();
    });

    it('displays the repair problem question', () => {
      cy.contains('What is the problem?');
    });

    it('displays a "cupboards" option', () => {
      cy.contains('Cupboards, including damaged cupboard doors');
    });

    it('displays a "walls" option', () => {
      cy.contains('Walls, floor or ceiling, excluding damp');
    });
  });

  context('Bathroom', () => {
    before(() => {
      navigateToLocation()
      cy.contains('Bathroom').click();
      cy.get('button').click();
    });

    it('displays the repair problem question', () => {
      cy.contains('What is the problem?');
    });

    it('displays a "walls" option', () => {
      cy.contains('Walls, floor or ceiling, excluding damp');
    });
  });

  context('Bedroom', () => {
    before(() => {
      navigateToLocation()
      cy.contains('Bedroom').click();
      cy.get('button').click();
    });

    genericWhatIsTheProblemOptions();
  });

  context('Living Areas', () => {
    before(() => {
      navigateToLocation();
      cy.contains('Living Areas').click();
      cy.get('button').click();
    });

    it('displays a "walls" option', () => {
      genericWhatIsTheProblemOptions();

      it('displays "stairs" option', () => {
        cy.contains('Stairs (including handrail)');
      });
    });
  });
});
