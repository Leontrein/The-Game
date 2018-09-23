alert('Waar staan deze trein afkoringen voor? (Hoofdletter gevoelig)')
if (prompt('Mat 64') == 'Materieel 1964') {
  if (prompt('DM90') == 'Diesel Materieel 1990') {
    if (prompt('DDM') == 'DubbelDekker Materieel') {
      if (prompt('V-IRM') == 'Verlengt - InterRegio Materieel') {
        if (prompt('SM90') == 'Stoptrein Materieel 1990') {
          if (prompt('SGM') == 'StadsGewestelijk Materieel') {
            if (prompt('SLT') == 'Sprinter Light Train') {
              if (prompt('Waar staat de m in ICMm voor?') == 'gemoderniseerd') {
                alert('Waar staan deze treinbak afkoringen voor? (Hoofdletter gevoelig)')
                if (prompt('ABk') == 'eerste klas, tweede klas, kopbak') {
                  if (prompt('Bs') == 'tweede klas, stuurstand') {
                    if (prompt('Bkd') == 'tweede klas, keuken, bagage') {
                      alert('Dat was het, goed gedaan!')
                    } else {alert('Fout, het goede antwoord is: tweede klas, keuken, bagage')
                    }
                  } else {alert('Fout, het goede antwoord is: tweede klas, stuurstand')
                  }
                } else {alert('Fout, het goede antwoord is: eerste klas, tweede klas, kopbak')
                }
              } else {alert('Fout, het goede antwoord is: gemoderniseerd')
              }
            } else {alert('Fout, het goede antwoord is: Sprinter Light Train')
            }
          } else {alert('Fout, het goede antwoord is: StadsGewestelijk Materieel')
          }
        } else {alert('Fout, het goede antwoord is: Stoptrein Materieel 1990')
        }
      } else {alert('Fout, het goede antwoord is: Verlengt - InterRegio Materieel')
      }
  } else {alert('Fout, het goede antwoord is: DubbelDekker Materieel')
  }
} else {alert('Fout, het goede antwoord is: Diesel Materieel 1990')
}
} else {alert('Fout, het goede antwoord is: Materieel 1964')
}
