// Copyright 2013-2019, University of Colorado Boulder

/**
 * The 'Macro' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Image = require( 'SCENERY/nodes/Image' );
  const MacroModel = require( 'PH_SCALE/macro/model/MacroModel' );
  const MacroScreenView = require( 'PH_SCALE/macro/view/MacroScreenView' );
  const ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  const phScale = require( 'PH_SCALE/phScale' );
  const PHScaleColors = require( 'PH_SCALE/common/PHScaleColors' );
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );

  // strings
  const screenMacroString = require( 'string!PH_SCALE/screen.macro' );

  // images
  const homeIcon = require( 'image!PH_SCALE/Macro-home-icon.png' );
  const navbarIcon = require( 'image!PH_SCALE/Macro-navbar-icon.png' );

  class MacroScreen extends Screen {

    /**
     * @param {Object} [modelOptions]
     */
    constructor( modelOptions ) {

      const options = {
        name: screenMacroString,
        backgroundColorProperty: new Property( PHScaleColors.SCREEN_BACKGROUND ),
        homeScreenIcon: new Image( homeIcon ),
        navigationBarIcon: new Image( navbarIcon )
      };

      super(
        function() { return new MacroModel( modelOptions ); },
        function( model ) { return new MacroScreenView( model, ModelViewTransform2.createIdentity() ); },
        options
      );
    }
  }

  return phScale.register( 'MacroScreen', MacroScreen );
} );