/* @ds-bundle: {"format":4,"namespace":"LB","components":[{"name":"Button"},{"name":"Card"},{"name":"Label"},{"name":"Tag"},{"name":"Separator"},{"name":"RowList"},{"name":"Switch"},{"name":"Logo"},{"name":"Mark"},{"name":"Cursor"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function rest(props, omit) {
    var o = {};
    for (var k in props) if (Object.prototype.hasOwnProperty.call(props, k) && omit.indexOf(k) < 0) o[k] = props[k];
    return o;
  }

  /* Button: one size (44px), three levels. The prism is the 1px border of primary and secondary. */
  function Button(props) {
    var level = props.level || 'primary';
    var tag = props.href ? 'a' : 'button';
    var p = rest(props, ['level', 'children', 'className', 'icon']);
    p.className = cx('lb-btn', 'lb-btn--' + level, props.className);
    if (tag === 'button' && !p.type) p.type = 'button';
    return h(tag, p,
      h('span', { className: 'lb-btn__in' },
        h('span', { className: 'lb-btn__label' }, props.children),
        props.icon || null));
  }

  /* Card: 1px prism border, page fill, 2px radius, 16px padding; media sits on the panel colour. */
  function Card(props) {
    var tag = props.href ? 'a' : 'div';
    var p = rest(props, ['media', 'mediaAlt', 'kicker', 'title', 'meta', 'children', 'className']);
    p.className = cx('lb-card', props.className);
    return h(tag, p,
      h('div', { className: 'lb-card__in' },
        props.media ? h('figure', { className: 'lb-card__media' }, h('img', { src: props.media, alt: props.mediaAlt || '' })) : null,
        props.kicker ? h(Label, null, props.kicker) : null,
        props.title ? h('h3', { className: 'lb-card__title' }, props.title) : null,
        props.children ? h('p', { className: 'lb-card__body' }, props.children) : null,
        props.meta ? h(Label, { variant: 'meta' }, props.meta) : null));
  }

  /* Label: the mono uppercase voice. kicker 12px .2em, meta 11px .16em. */
  function Label(props) {
    var p = rest(props, ['variant', 'as', 'className', 'children']);
    p.className = cx('lb-label', 'lb-label--' + (props.variant || 'kicker'), props.className);
    return h(props.as || 'p', p, props.children);
  }

  /* Tag: mono 10px .12em uppercase, hairline border, 2px radius. */
  function Tag(props) {
    var p = rest(props, ['className', 'children']);
    p.className = cx('lb-tag', props.className);
    return h('span', p, props.children);
  }

  /* Separator: the prism as a 1px line. */
  function Separator(props) {
    var o = props.orientation === 'vertical';
    return h('span', {
      role: 'separator', 'aria-orientation': o ? 'vertical' : 'horizontal',
      className: cx('lb-sep', o && 'lb-sep--v', props.short && 'lb-sep--short', props.neutral && 'lb-sep--neutral', props.className),
      style: props.style
    });
  }

  /* RowList: each item gets a prism line on top; the last also gets one underneath. */
  function RowList(props) {
    var items = React.Children.toArray(props.children);
    return h('ul', { className: cx('lb-rows', props.className) },
      items.map(function (c, i) { return h('li', { key: i }, c); }));
  }

  /* Switch: two or more mono options in a prism frame, 30px high. Controlled or uncontrolled. */
  function Switch(props) {
    var options = props.options || [];
    var first = options.length ? (options[0].value !== undefined ? options[0].value : options[0]) : null;
    var st = React.useState(props.defaultValue !== undefined ? props.defaultValue : first);
    var value = props.value !== undefined ? props.value : st[0];
    return h('div', { className: cx('lb-switch', props.className), role: 'group', 'aria-label': props.label || 'View' },
      h('div', { className: 'lb-switch__in' },
        options.map(function (o) {
          var v = o.value !== undefined ? o.value : o;
          var l = o.label !== undefined ? o.label : o;
          return h('button', {
            key: v, type: 'button', className: 'lb-switch__opt', 'aria-pressed': v === value ? 'true' : 'false',
            onClick: function () { st[1](v); if (props.onChange) props.onChange(v); }
          }, l);
        })));
  }

  /* Logo: the wordmark is the name, set in Libertinus Serif 20px. */
  function Logo(props) {
    var p = rest(props, ['className', 'children']);
    p.className = cx('lb-logo', props.className);
    return h(props.href ? 'a' : 'span', p, props.children || 'Laura Benavente');
  }

  /* Mark: the favicon. A prism ring (stroke 2.5/32) with a dot inside (r 5/32). */
  var markId = 0;
  function Mark(props) {
    var size = props.size || 32;
    var idRef = React.useRef(null);
    if (idRef.current === null) idRef.current = 'lb-mark-' + (++markId);
    var id = idRef.current;
    var stops = [['0', '#1E2A78'], ['.18', '#2F5FD0'], ['.36', '#2FA7C4'], ['.53', '#63BE6E'], ['.70', '#E3C64B'], ['.85', '#E8834B'], ['1', '#E2436B']];
    return h('svg', { className: cx('lb-mark', props.className), width: size, height: size, viewBox: '0 0 32 32', role: 'img', 'aria-label': props.label || 'Laura Benavente' },
      h('defs', null, h('linearGradient', { id: id, x1: '0', y1: '0', x2: '1', y2: '0' },
        stops.map(function (s) { return h('stop', { key: s[0], offset: s[0], stopColor: s[1] }); }))),
      h('circle', { cx: 16, cy: 16, r: 14.75, fill: 'none', stroke: 'url(#' + id + ')', strokeWidth: 2.5 }),
      h('circle', { className: 'lb-mark__dot', cx: 16, cy: 16, r: 5 }));
  }

  /* Cursor: a static rendering of the custom cursor's two main states, for specs and mockups. */
  function Cursor(props) {
    if (props.state === 'link') {
      return h('span', { className: cx('lb-cursor', 'lb-cursor--link', props.className) },
        h('span', { className: 'lb-cursor__tag' }, props.label || 'Say hi'));
    }
    return h('span', { className: cx('lb-cursor', props.className), 'aria-hidden': 'true' },
      h('span', { className: 'lb-cursor__ring' }),
      h('span', { className: 'lb-cursor__dot' }));
  }

  window.LB = {
    Button: Button, Card: Card, Label: Label, Tag: Tag, Separator: Separator, RowList: RowList,
    Switch: Switch, Logo: Logo, Mark: Mark, Cursor: Cursor
  };
})();
