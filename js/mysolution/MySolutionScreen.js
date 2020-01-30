// Copyright 2013-2020, University of Colorado Boulder

/**
 * The 'My Solution' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Image = require( 'SCENERY/nodes/Image' );
  const ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  const MySolutionModel = require( 'PH_SCALE/mysolution/model/MySolutionModel' );
  const MySolutionScreenView = require( 'PH_SCALE/mysolution/view/MySolutionScreenView' );
  const phScale = require( 'PH_SCALE/phScale' );
  const PHScaleColors = require( 'PH_SCALE/common/PHScaleColors' );
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const screenMySolutionString = require( 'string!PH_SCALE/screen.mySolution' );

  // images
  const homeIcon = require( 'image!PH_SCALE/MySolution-home-icon.png' );
  const navbarIcon = require( 'image!PH_SCALE/MySolution-navbar-icon.png' );

  class MySolutionScreen extends Screen {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {
      assert && assert( tandem instanceof Tandem, 'invalid tandem' );

      const options = {
        name: screenMySolutionString,
        backgroundColorProperty: new Property( PHScaleColors.SCREEN_BACKGROUND ),
        homeScreenIcon: new Image( homeIcon ),
        navigationBarIcon: new Image( navbarIcon ),
        tandem: tandem
      };

      super(
        () => new MySolutionModel( tandem.createTandem( 'model') ),
        model => new MySolutionScreenView( model, ModelViewTransform2.createIdentity(), tandem.createTandem( 'view') ),
        options
      );
    }
  }

  return phScale.register( 'MySolutionScreen', MySolutionScreen );
} );