const { GraphQLEnumType } = require('graphql')

const CODES = [
  'AF', // Afghanistan.
  'AX', // Åland Islands.
  'AL', // Albania.
  'DZ', // Algeria.
  'AD', // Andorra.
  'AO', // Angola.
  'AG', // Antigua and Barbuda.
  'AR', // Argentina.
  'AM', // Armenia.
  'AU', // Australia.
  'AT', // Austria.
  'AZ', // Azerbaijan.
  'BS', // The Bahamas.
  'BH', // Bahrain.
  'BD', // Bangladesh.
  'BB', // Barbados.
  'BY', // Belarus.
  'BE', // Belgium.
  'BZ', // Belize.
  'BJ', // Benin.
  'BT', // Bhutan.
  'BO', // Bolivia.
  'BA', // Bosnia and Herzegovina.
  'BW', // Botswana.
  'BR', // Brazil.
  'BN', // Brunei.
  'BG', // Bulgaria.
  'BF', // Burkina.
  'BI', // Burundi.
  'KH', // Cambodia.
  'CM', // Cameroon.
  'CA', // Canada.
  'CV', // Cape Verde.
  'CF', // The Central African Republic.
  'TD', // Chad.
  'CL', // Chile.
  'CN', // China.
  'CO', // Colombia.
  'KM', // The Comoros.
  'CG', // The Congo.
  'CD', // The Democratic Republic of the Congo.
  'CR', // Costa Rica.
  'CI', // Côte d'Ivoire.
  'HR', // Croatia.
  'CU', // Cuba.
  'CY', // Cyprus.
  'CZ', // The Czech Republic.
  'DK', // Denmark.
  'DJ', // Djibouti.
  'DM', // Dominica.
  'DO', // The Dominican Republic.
  'TL', // Timor-Leste.
  'EC', // Ecuador.
  'EG', // Egypt.
  'SV', // El Salvador.
  'GQ', // Equatorial Guinea.
  'ER', // Eritrea.
  'EE', // Estonia.
  'ET', // Ethiopia.
  'FJ', // Fiji.
  'FI', // Finland.
  'FR', // France.
  'GA', // Gabon.
  'GM', // The Gambia.
  'GE', // Georgia.
  'DE', // Germany.
  'GH', // Ghana.
  'GR', // Greece.
  'GD', // Grenada.
  'GT', // Guatemala.
  'GG', // Guernsey.
  'GN', // Guinea.
  'GW', // Guinea-Bissau.
  'GY', // Guyana.
  'HT', // Haiti.
  'VA', // The Holy See.
  'HN', // Honduras.
  'HU', // Hungary.
  'IS', // Iceland.
  'IN', // India.
  'ID', // Indonesia.
  'IR', // Iran.
  'IQ', // Iraq.
  'IE', // Ireland.
  'IM', // Isle of Man.
  'IL', // Israel.
  'IT', // Italy.
  'JM', // Jamaica.
  'JP', // Japan.
  'JE', // Jersey.
  'JO', // Jordan.
  'KZ', // Kazakhstan.
  'KE', // Kenya.
  'KI', // Kiribati.
  'KP', // The Democratic People's Republic of Korea.
  'KR', // The Republic of Korea.
  'KW', // Kuwait.
  'KG', // Kyrgyzstan.
  'LA', // Laos.
  'LV', // Latvia.
  'LB', // Lebanon.
  'LS', // Lesotho.
  'LR', // Liberia.
  'LY', // Libya.
  'LI', // Liechtenstein.
  'LT', // Lithuania.
  'LU', // Luxembourg.
  'MG', // Madagascar.
  'MW', // Malawi.
  'MY', // Malaysia.
  'MV', // Maldives.
  'ML', // Mali.
  'MT', // Malta.
  'MH', // The Marshall Islands.
  'MR', // Mauritania.
  'MU', // Mauritius.
  'MX', // Mexico.
  'FM', // Micronesia.
  'MD', // Moldova.
  'MC', // Monaco.
  'MN', // Mongolia.
  'ME', // Montenegro.
  'MA', // Morocco.
  'MZ', // Mozambique.
  'MM', // Myanmar.
  'NA', // Namibia.
  'NR', // Nauru.
  'NP', // Nepal.
  'NL', // The Netherlands.
  'NZ', // New Zealand.
  'NI', // Nicaragua.
  'NE', // The Niger.
  'NG', // Nigeria.
  'NO', // Norway.
  'OM', // Oman.
  'PK', // Pakistan.
  'PW', // Palau.
  'PA', // Panama.
  'PG', // Papua New Guinea.
  'PY', // Paraguay.
  'PE', // Peru.
  'PH', // The Philippines.
  'PL', // Poland.
  'PT', // Portugal.
  'QA', // Qatar.
  'RO', // Romania.
  'RU', // Russia.
  'RW', // Rwanda.
  'KN', // Saint Kitts and Nevis.
  'LC', // Saint Lucia.
  'VC', // Saint Vincent and The Grenadines.
  'WS', // Samoa.
  'SM', // San Marino.
  'ST', // Sao Tome and Principe.
  'SA', // Saudi Arabia.
  'SN', // Senegal.
  'RS', // Serbia.
  'SC', // Seychelles.
  'SL', // Sierra Leone.
  'SG', // Singapore.
  'SK', // Slovakia.
  'SI', // Slovenia.
  'SB', // Solomon Islands.
  'SO', // Somalia.
  'ZA', // South Africa.
  'ES', // Spain.
  'LK', // Sri Lanka.
  'SD', // The Sudan.
  'SR', // Suriname.
  'SZ', // Swaziland.
  'SE', // Sweden.
  'CH', // Switzerland.
  'SY', // Syria.
  'TJ', // Tajikistan.
  'TZ', // Tanzania.
  'TH', // Thailand.
  'MK', // Macedonia.
  'TG', // Togo.
  'TO', // Tonga.
  'TT', // Trinidad and Tobago.
  'TN', // Tunisia.
  'TR', // Turkey.
  'TM', // Turkmenistan.
  'TV', // Tuvalu.
  'UG', // Uganda.
  'UA', // Ukraine.
  'AE', // The United Arab Emirates.
  'GB', // The United Kingdom.
  'US', // The United States.
  'UY', // Uruguay.
  'UZ', // Uzbekistan.
  'VU', // Vanuatu.
  'VE', // Venezuela.
  'VN', // Viet Nam.
  'YE', // Yemen.
  'ZM', // Zambia.
  'ZW', // Zimbabwe.
  'AS', // American Samoa.
  'AI', // Anguilla.
  'AQ', // Antarctica.
  'AW', // Aruba.
  'BM', // Bermuda.
  'BV', // Bouvet Island.
  'IO', // The British Indian Ocean Territory.
  'KY', // Cayman Islands.
  'CX', // Christmas Island.
  'CC', // Cocos Islands.
  'CK', // Cook Islands.
  'FK', // Falkland Islands.
  'FO', // Faroe Islands.
  'GF', // French Guiana.
  'PF', // French Polynesia.
  'TF', // The French Southern Territories.
  'GI', // Gibraltar.
  'GL', // Greenland.
  'GP', // Guadeloupe.
  'GU', // Guam.
  'HM', // Heard Island and McDonald Islands.
  'HK', // Hong Kong.
  'MO', // Macao.
  'MQ', // Martinique.
  'YT', // Mayotte.
  'MS', // Montserrat.
  'AN', // Netherlands Antilles.
  'NC', // New Caledonia.
  'NU', // Niue.
  'NF', // Norfolk Island.
  'MP', // Northern Mariana Islands.
  'PS', // The Occupied Palestinian Territory.
  'PN', // Pitcairn.
  'PR', // Puerto Rico.
  'RE', // Réunion.
  'BL', // Saint Barthélemy.
  'SH', // Saint Helena.
  'MF', // Saint Martin.
  'PM', // Saint Pierre and Miquelon.
  'GS', // South Georgia and The South Sandwich Islands.
  'SJ', // Svalbard and Jan Mayen.
  'TW', // Taiwan.
  'TK', // Tokelau.
  'TC', // Turks and Caicos Islands.
  'UM', // United States Minor Outlying Islands.
  'VG', // British Virgin Islands.
  'VI', // US Virgin Islands.
  'WF', // Wallis and Futuna.
  'EH' // Western Sahara.
]
exports.CODES = CODES

const values = {}
for (let code of CODES) {
  values[code] = { value: code }
}

exports.ISOTerritory = new GraphQLEnumType({
  name: 'ISO3166_1',
  values
})