import { environment } from './../../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Map, NavigationControl, Popup } from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/dark-v10';
  lat = 0.0;
  lng = 0.0;


  constructor() { }

  ngOnInit() {
    this.map = new Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 1,
      center: [this.lng, this.lat]
    });

    // Add map controls
    this.map.addControl(new NavigationControl());

    this.map.on('load', () => this.loadData());
    this.map.on('click', 'points', (event) => this.viewLocationDetails(event));
    console.log(this.map);
  }

  loadData() {
      this.map.addSource('points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.31532, 27.67835]
            },
            properties: {
              name: 'Robotics Association of Nepal',
              website: 'www.ran.org.np',
              machinesDesc: 'Raspberry Pi, Arduino, Drones, home-made CNC Plasma Cutter, robotics parts, design software'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.31895, 27.69458]
            },
            properties: {
              name: 'Ignition Lab',
              website: '',
              machinesDesc: 'Prusa i3 3D printer x 1,Prusa i3 Dual extruder 3D printer x 1,Electronics Bench,Container full of tools (currently in Boston on standby to Nepal), Power tools (drill press), Basic hand tools'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.31895, 27.69458]
            },
            properties: {
              name: 'Maker Valley',
              website: '',
              machinesDesc: 'Ender2 x1'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.31057, 27.70259]
            },
            properties: {
              name: 'Microsoft Innovation Center Nepal',
              website: 'http://www.micnepal.org',
              machinesDesc: '3D printer: Duplicator 6'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.31828, 27.67475]
            },
            properties: {
              name: 'Endeavor Pvt. Ltd.',
              website: 'http://www.endeavor.com.np',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.30619, 27.69432]
            },
            properties: {
              name: 'iHub',
              website: 'http://www.fncci.org/innovation-hub-159.html',
              machinesDesc: 'MakerBot Replicator 5th Gen, Laser Cutter, Drill press, Microsaw, Jigsaws, Hand tools, Robotics kit,MakerBot Replicator 5th Gen'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.34907, 27.70019]
            },
            properties: {
              name: 'Satish Ji\'s Shack',
              website: '',
              machinesDesc: 'CNC router ,Laser engraver, laser head ,Basic electronics tools, Advanced Radio equipment,3D printer - Hictop pursa i3'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.3105, 27.68063]
            },
            properties: {
              name: 'Paaila Technology',
              website: 'https://paailatechnology.com/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.33101, 27.70893]
            },
            properties: {
              name: 'Karkhana',
              website: 'http://www.karkhana.asia',
              machinesDesc: 'Laser cutter, Welding machines,3D printer: Up Box Plus'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.32166, 27.66737]
            },
            properties: {
              name: 'Field Ready',
              website: 'http://www.fieldready.org',
              machinesDesc: 'heat guns, power tools, plumbing tools, silicone moulding equipment, autoclave,4x 3D printers including 1x Tier Time 230x230x250mm print capacity UP Box, 1x UP Mini (140x140x140mm print capacity) and one medium print volume Dual Extruder printer. ( Up mini 2 )'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [87.25531, 26.81194]
            },
            properties: {
              name: 'xEro3D Hubs',
              website: '',
              machinesDesc: 'UPmini 2 Tiretime 3D Printer'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.31759, 27.68648]
            },
            properties: {
              name: 'Rastriya Aviskar Kendra (NIC)',
              website: 'http://www.nicnepal.org',
              machinesDesc: 'Electronics Bench, Hand drills, drill press, Up Box + 3D Printer'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.32107, 27.69016]
            },
            properties: {
              name: 'Center for Molecular Dynamics Nepal',
              website: 'http://www.cmdn.org.np',
              machinesDesc: 'Tevo Black Widow 3D printer x2,Tevo Tarantula Dual extruder 3D printer x1, Electronics bench, Hand tools for post production processes,Spare hardware for additional CNC'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.31766, 27.68681]
            },
            properties: {
              name: 'Robotics Academy of Nepal',
              website: '-',
              machinesDesc: 'Electronics bench: soldering iron, meters, wire strippers,Hand drills, drill press, grinder,Drones,Up Box +  3D Printer                                                     -Up +2 3D Printer'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.53863, 27.61961]
            },
            properties: {
              name: 'Kathmandu University',
              website: 'http://www.ku.edu.np',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.32154, 27.68584]
            },
            properties: {
              name: 'Pro-Mech Minds & Engineering Services Pvt. Ltd',
              website: 'http://www.promechminds.com',
              machinesDesc: 'Up Box + 3D printer'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.32154, 27.70966]
            },
            properties: {
              name: 'Fuse Machines',
              website: 'http://fusemachines.com.np',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.31152, 27.68152]
            },
            properties: {
              name: 'British School',
              website: 'http://www.tbskathmandu.org',
              machinesDesc: 'Quant 3D Printer ( Up +2 )'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.31542, 27.67834]
            },
            properties: {
              name: 'Nepal Communitere',
              website: 'http://www.nepal.communitere.org',
              machinesDesc: 'http://www.appropedia.org/Nepal_Communitere_Maker_Space'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [83.95768, 28.18664]
            },
            properties: {
              name: 'SOS Vocational Training Center',
              website: 'http://lamton.org/institution/vocational/810-sos-vocational-training-centre-pokhara',
              machinesDesc: 'Laser Cutter, Welding Machines,Carpentry tools, Power tools'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.3083, 27.6893]
            },
            properties: {
              name: 'Supreme Light Technology',
              website: 'www.sltech.com.np',
              machinesDesc: 'Anycubic I3 MEGA'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.33026, 27.736]
            },
            properties: {
              name: 'Teaching Hospital',
              website: '',
              machinesDesc: 'AJ 3D Printer'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.31765, 27.68678]
            },
            properties: {
              name: 'Zener Technology',
              website: 'www.zenertech.com',
              machinesDesc: '3D printer: Tier Time UP x2, Tier Time Mini2 x2, Tier Time UP Plus2 x1, Create Box Max x1,Power Tools: Hand drills, drill press, grinder, CNC machine, Sheet metal bender,Pressurized air sander'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.30104, 27.72994]
            },
            properties: {
              name: 'Balaju School of Engineering and Technology (BSET)',
              website: '',
              machinesDesc: 'UP Box+'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.32, 27.68284]
            },
            properties: {
              name: 'Pulchowk Engineering College',
              website: 'www.ioe.edu.np',
              machinesDesc: 'Laser cutter, lathe machine *3, milling machine, surface grinder, shaper welding, drill machines,3D printer - Jenny Printer'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [85.6949, 27.77682]
            },
            properties: {
              name: 'Tiny Bits Foundation',
              website: '',
              machinesDesc: 'Ender2 x1'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [120.401604, 17.62469]
            },
            properties: {
              name: 'Negosyo Center - Fabrication Laboratory and Co-Working Space Ilocos Region (FabLab Ilocos)',
              website: 'https://www.facebook.com/FabLabIlocos/',
              machinesDesc: 'Ultimaker 2+, Da Vinci 1.0 Pro, CNC Laser 48, Modela MDX, CNC ROUTER 48, Roland Print and Cut 640i, Embroidery Machine'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.897997, 10.323698]
            },
            properties: {
              name: 'Fablab UP Cebu',
              website: 'https://www.facebook.com/fablabupcebu/',
              machinesDesc: 'Shopbot , Roland Print and Cut 640i'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.818223, 10.718669]
            },
            properties: {
              name: 'Fablab CTU Tuburan',
              website: 'https://www.facebook.com/ctutuburanfablab/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [125.597891, 8.955382]
            },
            properties: {
              name: 'Fablab Caraga',
              website: 'https://www.facebook.com/fablabcaraga/',
              machinesDesc: 'Da Vinci 1.0 Pro'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.903942, 10.293971]
            },
            properties: {
              name: 'Department of Trade and Industry - Cebu Provincial Office',
              website: 'https://www.facebook.com/DTI.Cebu/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.855793, 9.646682]
            },
            properties: {
              name: 'Fablab Bohol',
              website: 'https://www.facebook.com/fablabbohol/',
              machinesDesc: 'Shopbot , BFB 3D Printer, Bonsai 3D Printer, Delta 3D Printer, Universal Laser Cutter V.60, Roland Print and Cut 640i, Roland MDX 40A'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [120.865996, 14.403501]
            },
            properties: {
              name: 'Fablab Cavite (Technovation Center)',
              website: '',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [121.555926, 16.689831]
            },
            properties: {
              name: 'FabLab Santiago City',
              website: 'https://www.facebook.com/fablabsantiagocity/',
              machinesDesc: 'Shopbot , Roland MDX 40A, Universal Laser Cutter V.60, Cube Pro Trio, Xbox Kinetics'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [124.243723, 8.242144]
            },
            properties: {
              name: 'FAB LAB Mindanao',
              website: 'https://www.facebook.com/FABLABMindanao/',
              machinesDesc: 'Ultimaker 3 extended , Ultimaker 2+, Anycubic i3 Mega, Shopbot'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [121.07377, 13.784646]
            },
            properties: {
              name: 'LIKHA FabLab',
              website: 'https://www.facebook.com/likha.batstateu/',
              machinesDesc: 'Ultimaker 3 extended , Markforge Onyx Series, Epilog Helix Laser Cutter, Shopbot , Formec Compac Mini, Graphtech CE6000-60 Plus, Tormach PCNC 440, Epilog FiberMark Metal Laser Engraver'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [121.076157, 14.641589]
            },
            properties: {
              name: 'Eugenio Lopez Jr. Makerspace',
              website: 'https://www.facebook.com/AreteAteneo/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.729167, 13.147033]
            },
            properties: {
              name: 'FabLab Bicol',
              website: 'https://www.facebook.com/Fablabbicol/',
              machinesDesc: 'Shopbot , Roland Print and Cut 640i, Universal Laser Cutter V.60, Anhui CZ1237G Gap Bed Latthe, Generic Heat Press, Ultimaker 3, Cube Pro Trio, Roland MDX 40A, Makita Scroll Saw, Artech EVA 3D Scanner'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [120.993302, 14.605555]
            },
            properties: {
              name: 'Fablab Manila',
              website: 'https://www.facebook.com/FABLABManila/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.191786, 13.631805]
            },
            properties: {
              name: 'BISCAST Man Fab Lab',
              website: 'https://www.facebook.com/biscastmanfablab',
              machinesDesc: 'Zomai CNC Latthe Machine Model: ZM-1516, Shopbot , Synrad Firestar TN6090, Roland MDX 40A, Roland Print and Cut 640i, XYZ Printing Pro (FDM), Atom Delta 3D Printer'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [122.058602, 6.913473]
            },
            properties: {
              name: 'Zampen Fablab',
              website: 'https://www.facebook.com/zampenfablab10716/',
              machinesDesc: 'Roland MDX 40A, Cube Pro Trio, Shopbot , CMA-1390 Laser Engraving & Cutting Machine, Roland Print and Cut 640i'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.735202, 13.139405]
            },
            properties: {
              name: 'DTI Region V Office',
              website: 'https://www.facebook.com/DTI.Region5/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [121.061803, 14.651965]
            },
            properties: {
              name: 'Fablab UP College of Fine Arts',
              website: 'https://www.facebook.com/upcfafablab/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [120.59853, 16.417785]
            },
            properties: {
              name: 'DTI - SLU Fablab',
              website: 'https://www.facebook.com/siribcenter/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [120.534559, 15.192365]
            },
            properties: {
              name: 'Innovation Center - Philippine Science High School Central Luzon Campus',
              website: '',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [120.656522, 14.997938]
            },
            properties: {
              name: 'Don Honorio Ventura State U Fablab',
              website: '',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [120.992633, 14.567014]
            },
            properties: {
              name: 'Animo Labs',
              website: 'https://www.facebook.com/animolabs/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [121.250848, 14.16315]
            },
            properties: {
              name: 'SIBOL Lab',
              website: '',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.979304, 11.04575]
            },
            properties: {
              name: 'DigiFab - LGU Bogo',
              website: 'https://www.facebook.com/Bogo-Digital-Fablab-and-ICT-Training-Center-2215722055335090/',
              machinesDesc: 'Ultimaker 2'
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [124.030249, 10.503328]
            },
            properties: {
              name: 'Fablab CTU Danao',
              website: 'https://www.facebook.com/ctudanaofablab',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.600101, 9.882641]
            },
            properties: {
              name: 'FABLAB CTU Argao',
              website: 'https://www.facebook.com/pages/category/Local-Business/Fablab-Argao-2292193277768965/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.303811, 9.312406]
            },
            properties: {
              name: 'Fablab Negros',
              website: 'https://www.facebook.com/FABLAB-Negros-126985075365692/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [121.050398, 14.4867]
            },
            properties: {
              name: 'Advanced Manufacturing Center (AMCEN)',
              website: 'http://amcen.dost.gov.ph/',
              machinesDesc: ''
            }
          }, {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [123.422789, 8.656223]
            },
            properties: {
              name: 'Fablab Dapitan',
              website: 'https://www.facebook.com/FablabDapitanPage/',
              machinesDesc: ''
            }
          }
        ]
        }
      });
      this.map.addLayer({
        id: 'points',
        type: 'circle',
        source: 'points',
        paint: {
          'circle-color': '#ffffff'
        }

      });
  }

  viewLocationDetails(e) {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const name = e.features[0].properties.name;
    const website = e.features[0].properties.website;
    const machinesDesc = e.features[0].properties.machinesDesc;
    const html = `
    <div style="color: black">
      <h1 >${name}</h1>
      <p>Website: <a href="${website}" target="_blank" style="colour: #455a64;">${website}</a></p>
      <p>Machines Available: <br>${machinesDesc}</p>
    </div>
    `;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new Popup()
    .setLngLat(coordinates)
    .setHTML(html)
    .addTo(this.map);
  }
}
