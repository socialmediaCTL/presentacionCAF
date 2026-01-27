// Datos de las 12 diapositivas
const slidesData = [
  {
    id: 1,
    image: 'madrid_skyline_hyperreal_1769441242423.png',
    imagePosition: 'left',
    content: `
      <div class="accent-bar"></div>
      <h1>Excelencia en la Gestión Energética</h1>
      <p class="subtitle">Soluciones de ahorro, transparencia y eficiencia para el Colegiado de Madrid (CAFMadrid).</p>
      <div class="centered-container">
        <a href="https://www.comparamostuluz.es" class="web-url">www.<span class="text-white">comparamostuluz</span>.es</a>
      </div>
    `
  },
  {
    id: 2,
    image: 'market_volatility_hyperreal_1769441258524.png',
    imagePosition: 'right',
    content: `
      <div class="accent-bar"></div>
      <h2>El mercado eléctrico actual es un entorno de alta volatilidad</h2>
      <div class="points-grid">
        <div class="point-box"><span class="point-number">01</span><p>Cambios regulatorios frecuentes generan incertidumbre.</p></div>
        <div class="point-box"><span class="point-number">02</span><p>Nuevos tramos horarios complican la optimización.</p></div>
        <div class="point-box"><span class="point-number">03</span><p>La factura es uno de los mayores gastos comunitarios.</p></div>
        <div class="point-box"><span class="point-number">04</span><p>Falta de transparencia en renovaciones automáticas.</p></div>
      </div>
    `
  },
  {
    id: 3,
    image: 'professional_administrator_analytics.png',
    imagePosition: 'right',
    content: `
      <div class="accent-bar"></div>
      <h2>Oportunidades de Optimización en la Gestión Energética</h2>
      <div class="points-list">
        <div class="point-item"><div class="point-icon">1</div><div><h3>Reclamaciones constantes</h3><p>Atención diaria de quejas de vecinos por facturas inesperadamente altas.</p></div></div>
        <div class="point-item"><div class="point-icon">2</div><div><h3>Gestión de incidencias</h3><p>Trato tedioso con call centers ineficientes para resolver cortes.</p></div></div>
        <div class="point-item"><div class="point-icon">3</div><div><h3>Carga burocrática</h3><p>Burocracia interminable que resta tiempo a la gestión estratégica.</p></div></div>
        <div class="point-item"><div class="point-icon">4</div><div><h3>Transparencia en Juntas</h3><p>Oportunidad de presentar datos claros que faciliten la toma de decisiones.</p></div></div>
      </div>
    `
  },
  {
    id: 4,
    image: 'professional_consultancy_hyperreal_1769441301915.png',
    imagePosition: 'left',
    content: `
      <div class="accent-bar"></div>
      <h2>ComparamosTuLuz.es: Su consultora de confianza</h2>
      <div class="features-grid">
        <div class="feature-item"><div class="feature-title">Especialización</div><p>Especialistas exclusivos en el sector de Comunidades de Propietarios.</p></div>
        <div class="feature-item"><div class="feature-title">Independencia</div><p>Plataforma de comparación independiente y multimarca.</p></div>
        <div class="feature-item"><div class="feature-title">Transparencia</div><p>Foco total en la transparencia y el beneficio directo del vecino.</p></div>
        <div class="feature-item"><div class="feature-title">Experiencia</div><p>Equipo técnico experto en optimización de suministros comunes.</p></div>
      </div>
    `
  },
  {
    id: 5,
    image: 'volt_mascot.png',
    imagePosition: 'right',
    content: `
      <div class="accent-bar"></div>
      <h2>Nuestra misión: Convertir la energía en una ventaja competitiva</h2>
      <div class="mission-list">
        <div class="mission-item"><h3>🚀 Liberación Administrativa</h3><p>Quitamos la gestión burocrática y las incidencias del despacho.</p></div>
        <div class="mission-item"><h3>💰 Garantía de Ahorro</h3><p>Acceso al precio más bajo en cada renovación contractual.</p></div>
        <div class="mission-item"><h3>📊 Comunicación Profesional</h3><p>Informes técnicos visuales que agilizan sus Juntas de Propietarios.</p></div>
        <div class="mission-item"><h3>💎 Valor Añadido</h3><p>Convertimos problemas en un servicio diferencial para comunidades.</p></div>
      </div>
    `
  },
  {
    id: 6,
    image: 'independence_comparison_hyperreal_1769441778198.png',
    imagePosition: 'left',
    content: `
      <div class="accent-bar"></div>
      <h2>Independencia vs. Comercializadora</h2>
      <p class="subtitle-text">La diferencia vital entre quien vende energía y quien defiende su ahorro</p>
      
      <div class="professional-list">
        <div class="pro-item">
          <span class="pro-icon">⚖️</span>
          <div class="pro-content">
            <h3>Intereses Opuestos vs. Alineados</h3>
            <p>La comercializadora busca su propio margen. Nosotros buscamos exclusivamente <strong>proteger el presupuesto de su comunidad</strong>.</p>
          </div>
        </div>
        <div class="pro-item">
          <span class="pro-icon">🔍</span>
          <div class="pro-content">
            <h3>Visión Parcial vs. Auditoría Total</h3>
            <p>Ellos ofrecen solo sus tarifas. Nosotros escaneamos todo el mercado (+30 compañías) con <strong>neutralidad técnica</strong>.</p>
          </div>
        </div>
        <div class="pro-item">
          <span class="pro-icon">🛡️</span>
          <div class="pro-content">
            <h3>Seguridad Contractual</h3>
            <p>Actuamos como <strong>escudo técnico</strong>, eliminando cláusulas abusivas, penalizaciones ocultas y letra pequeña.</p>
          </div>
        </div>
        <div class="pro-item">
          <span class="pro-icon">📈</span>
          <div class="pro-content">
            <h3>Gestión Activa Profitable</h3>
            <p>No buscamos "cambiar por cambiar". Solo ejecutamos movimientos cuando el beneficio económico es <strong>real, neto y garantizado</strong>.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 7,
    image: 'business_success_team_1769435169013.png',
    imagePosition: 'right',
    content: `
      <div class="accent-bar"></div>
      <h2>La auditoría de potencia revela ahorros invisibles inmediatos</h2>
      <div class="audit-list">
        <div class="audit-item"><h3>⚡ Potencia Sobredimensionada</h3><p>El <span class="highlight">40%</span> de las comunidades paga por potencia no utilizada.</p></div>
        <div class="audit-item"><h3>📉 Análisis de Picos</h3><p>Revisamos los picos de los últimos 12 meses para un ajuste técnico.</p></div>
        <div class="audit-item"><h3>📉 Reducción del Término Fijo</h3><p>Baja el término fijo desde el primer mes sin cambiar hábitos.</p></div>
        <div class="audit-item"><h3>⚙️ Optimización de Costes</h3><p>Optimizamos el coste fijo frente a la volatilidad del kWh.</p></div>
      </div>
    `
  },
  {
    id: 8,
    image: 'professional_consultancy_hyperreal_1769441301915.png',
    imagePosition: 'right',
    content: `
      <div class="accent-bar"></div>
      <h2>Informes comparativos: Herramientas para Juntas sin conflictos</h2>
      <div class="columns-grid">
        <div class="column-item"><div class="column-title">Claridad Visual</div><p>Entrega de documentos visuales claros que comparan la Situación Actual frente a la Propuesta de ahorro.</p></div>
        <div class="column-item"><div class="column-title">Rigor Técnico</div><p>Justificación técnica lista para ser leída ante los vecinos, eliminando dudas y suspicacias.</p></div>
        <div class="column-item"><div class="column-title">Diligencia Profesional</div><p>Soporte documental que avala la gestión proactiva y la profesionalidad del Administrador de Fincas.</p></div>
      </div>
      <div class="highlight-box"><p>"Facilitamos la toma de decisiones en la comunidad mediante datos objetivos, ahorros garantizados y transparencia total."</p></div>
    `
  },
  {
    id: 9,
    image: 'crm_laptop_user.jpg',
    imagePosition: 'left',
    content: `
      <div class="accent-bar"></div>
      <h2>CRM: Control total e inteligente</h2>
      <div class="digital-features">
        <div class="feature-item"><div class="feature-title">Panel de Control Único</div><p>Visualice todas sus comunidades, contratos y estados en un solo dashboard intuitivo.</p></div>
        <div class="feature-item"><div class="feature-title">Gestión de CUPS</div><p>Monitorización automática de puntos de suministro y evolución de consumo.</p></div>
        <div class="feature-item"><div class="feature-title">Alertas Proactivas</div><p>Avisos automáticos de vencimientos para evitar renovaciones tácitas.</p></div>
      </div>
    `
  },
  {
    id: 10,
    image: 'happy_family_living_room.jpg',
    imagePosition: 'left',
    content: `
      <div class="accent-bar"></div>
      <h2>Un modelo de negocio "Win-Win"</h2>
      
      <div class="win-win-content">
        <div class="zero-cost-block">
          <div class="zero-cost">0€</div>
          <p class="zero-cost-label">Sin coste para la Comunidad</p>
        </div>

        <div class="model-list">
          <div class="model-item-large">
            <h3>Consultoría Gratuita</h3>
            <p>Nuestra gestión es totalmente <strong>sin coste</strong> para el Administrador y para la Comunidad de Propietarios.</p>
          </div>
          <div class="model-item-large">
            <h3>Ahorro Neto</h3>
            <p>El ahorro conseguido impacta de forma íntegra y neta en la cuenta bancaria de la comunidad desde el primer mes.</p>
          </div>
          <div class="model-item-large">
            <h3>Sin Compromiso</h3>
            <p>No hay letra pequeña: si nuestro estudio no detecta un ahorro real y beneficioso, no se realiza ningún cambio.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 11,
    image: 'business_success_hyperreal_1769441374416.png',
    imagePosition: 'right',
    content: `
      <div class="accent-bar"></div>
      <h2>Hoja de Ruta: Próximos Pasos</h2>
      <div class="roadmap-container">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>Firma de Convenio</h3>
            <p>Formalización de la colaboración y acceso a la plataforma.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>Auditoría Inicial</h3>
            <p>Recopilación de facturas y análisis técnico de suministros.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>Propuesta de Valor</h3>
            <p>Presentación de estudios de ahorro y optimización.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content">
            <h3>Ejecución y Control</h3>
            <p>Implementación de cambios y monitorización continua.</p>
          </div>
        </div>
      </div>
      <div class="contact-footer">
        <div class="contact-info">Lideremos juntos la transición energética</div>
        <a href="https://www.comparamostuluz.es" class="contact-web">www.<span class="text-white">comparamostuluz</span>.es</a>
      </div>
    `
  }
];
