import {
  navigateToLocation
} from '../../support/helpers';

const testWindowOption = () => {
  it('displays the repair issue question', () => {
    cy.contains('What best describes the problem?');
  });

  it('displays a "Smashed window(s)" option', () => {
    cy.contains('Smashed window(s)');
  });

  it('displays a "Window stuck open" option', () => {
    cy.contains('Window stuck open');
  });

  it('displays a "Window stuck shut" option', () => {
    cy.contains('Window stuck shut');
  });

  it('displays a "Condensation" option', () => {
    cy.contains('Condensation');
  });

}

const testWallOption = () => {
  it('displays the repair issue question', () => {
    cy.contains('What best describes the problem?');
  });

  it('displays a "Wall tiles" option', () => {
    cy.contains('Wall tiles');
  });

  it('displays a "Floor tiles" option', () => {
    cy.contains('Floor tiles');
  });

  it('displays a "Light fitting(s)" option', () => {
    cy.contains('Light fitting(s)');
  });

  it('displays a "Skirting boards or architraves" option', () => {
    cy.contains('Skirting boards or architraves');
  });

  it('displays a "Plastering on the ceiling" option', () => {
    cy.contains('Plastering on the ceiling');
  });

  it('displays a "Plastering on the walls" option', () => {
    cy.contains('Plastering on the walls');
  });

  it('displays a "Wooden floorboards" option', () => {
    cy.contains('Wooden floorboards');
  });
}

const electricsOption = () => {
  context('Electrics, including lights and switches', () => {
    before(() => {
      cy.contains('Electrics, including lights and switches').click();
      cy.get('button').click();
    });

    it('displays the repair issue question', () => {
      cy.contains('What best describes the problem?');
    });

    it('displays a "Light" option', () => {
      cy.contains('Lights');
    });

    it('displays a "Socket" option', () => {
      cy.contains('Sockets');
    });

  });
}


describe('repairProblemBestDescription', () => {

  context('Kitchen', () => {
    before(()=>{
      navigateToLocation()
      cy.contains('Kitchen').click();
      cy.get('button').click();
    });

    context('Cupboards, including damaged cupboard doors', () => {
      before(()=>{
        cy.contains('Cupboards, including damaged cupboard doors').click();
        cy.get('button').click();
      });

      it('displays the repair issue question', () => {
        cy.contains('What best describes the problem?');
      });

      it('displays a "Hanging door" option', () => {
        cy.contains('Hanging door');
      });

      it('displays a "Missing door" option', () => {
        cy.contains('Missing door');
      });
    })
    context('Heating or hot water', () => {
      before(()=>{
        cy.go(-1);
        cy.contains('Heating or hot water').click();
        cy.get('button').click();
      });

      it('displays the repair issue question', () => {
        cy.contains('What best describes the problem?');
      });

      it('displays a "Boiler" option', () => {
        cy.contains('Boiler');
      });

      it('displays a "Radiator" option', () => {
        cy.contains('Radiator');
      });
    })
    context('Electrical, including extractor fans and lightbulbs', () => {
      before(()=>{
        cy.go(-1);
        cy.contains('Electrical, including extractor fans and lightbulbs').click();
        cy.get('button').click();
      });

      it('displays a "Extractor fan" option', () => {
        cy.contains('Extractor fan');
      });

      it('displays a "Socket(s)" option', () => {
        cy.contains('Socket(s)');
      });

      it('displays a "Light fitting(s)" option', () => {
        cy.contains('Light fitting(s)');
      });

      it('displays a "Cooker switch" option', () => {
        cy.contains('Cooker switch');
      });
    });
    context('Walls, floor or ceiling, excluding damp', () => {
      before(()=>{
        cy.go(-1);
        cy.contains('Walls, floor or ceiling, excluding damp').click();
        cy.get('button').click();
      });

      testWallOption();
    });
    context('Damaged or stuck windows', () => {
      before(()=>{
        cy.go(-1);
        cy.contains('Damaged or stuck windows').click();
        cy.get('button').click();
      });
      testWindowOption();
    });
  })

  context('Bathroom', () => {
    before(()=>{
      navigateToLocation()
      cy.contains('Bathroom').click();
      cy.get('button').click();
    });

    context('Walls, floor or ceiling, excluding damp', () => {
      before(() => {
        cy.contains('Walls, floor or ceiling, excluding damp').click();
        cy.get('button').click();
      });

      testWallOption();
    });

    context('Electrics, including extractor fan and pull cords', () => {
      before(() => {
        navigateToLocation()
        cy.contains('Bathroom').click();
        cy.get('button').click();
        cy.contains('Electrics, including extractor fan and pull cords').click();
        cy.get('button').click();
      });

      it('displays a "Spot lights" option', () => {
        cy.contains('Spot lights');
      });

      it('displays a "Tube light" option', () => {
        cy.contains('Tube light');
      });

    });
    context('Damaged or stuck windows', () => {
      before(()=>{
        cy.go(-1);
        cy.contains('Damaged or stuck windows').click();
        cy.get('button').click();
      });
      testWindowOption();
    });
  });

  context('Bedroom', () => {
    before(()=>{
      navigateToLocation()
      cy.contains('Bedroom').click();
      cy.get('button').click();
    });

    context('Walls, floor or ceiling, excluding damp', () => {
      before(() => {
        cy.contains('Walls, floor or ceiling, excluding damp').click();
        cy.get('button').click();
      });

      testWallOption();
    });

    context('Electrics, including extractor fan and pull cords', () => {
      before(()=>{
        cy.go(-1);
      });

      electricsOption();
    });

    context('Electrical, including extractor fans and lightbulbs', () => {
      before(()=>{
        cy.go(-1);
        navigateToLocation()
        cy.contains('Bedroom').click();
        cy.get('button').click();
      });
      electricsOption();
    });

    context('Damaged or stuck windows', () => {
      before(()=>{
        cy.go(-1);
        cy.contains('Damaged or stuck windows').click();
        cy.get('button').click();
      });
      testWindowOption();
    });
  });

  context('Living Area', () => {
    before(()=>{
      navigateToLocation()
      cy.contains('Living Area').click();
      cy.get('button').click();
    });

    context('Walls, floor or ceiling, excluding damp', () => {
      before(() => {
        cy.contains('Walls, floor or ceiling, excluding damp').click();
        cy.get('button').click();
      });

      testWallOption();
    });
    context('Electrics, including lights and switches', () => {
      before(()=>{
        cy.go(-1);
        navigateToLocation()
        cy.contains('Living Areas').click();
        cy.get('button').click();
      });

      electricsOption();
    });

    context('Damaged or stuck windows', () => {
      before(()=>{
        cy.go(-1);
        cy.contains('Damaged or stuck windows').click();
        cy.get('button').click();
      });
      testWindowOption();
    });
  });
});
