// Copyright 2020-2022, University of Colorado Boulder

/**
 * MicroSolution is the solution model used in the Micro screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../../axon/js/Property.js';
import { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import Solute from '../../common/model/Solute.js';
import SolutionDerivedProperties from '../../common/model/SolutionDerivedProperties.js';
import MacroSolution, { MacroSolutionOptions } from '../../macro/model/MacroSolution.js';
import phScale from '../../phScale.js';

type SelfOptions = EmptySelfOptions;

export type MySolutionOptions = SelfOptions & PickRequired<MacroSolutionOptions, 'tandem'>;

export default class MicroSolution extends MacroSolution {

  public readonly derivedProperties: SolutionDerivedProperties;

  public constructor( soluteProperty: Property<Solute>, providedOptions: MySolutionOptions ) {

    super( soluteProperty, providedOptions );

    this.derivedProperties = new SolutionDerivedProperties( this.pHProperty, this.totalVolumeProperty, {

      // Properties created by SolutionDerivedProperties should appear as if they are children of MicroSolution.
      tandem: providedOptions.tandem
    } );
  }
}

phScale.register( 'MicroSolution', MicroSolution );