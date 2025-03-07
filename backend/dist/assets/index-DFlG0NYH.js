;(function () {
    const i = document.createElement('link').relList
    if (i && i.supports && i.supports('modulepreload')) return
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) o(s)
    new MutationObserver((s) => {
        for (const f of s)
            if (f.type === 'childList')
                for (const h of f.addedNodes)
                    h.tagName === 'LINK' && h.rel === 'modulepreload' && o(h)
    }).observe(document, { childList: !0, subtree: !0 })
    function c(s) {
        const f = {}
        return (
            s.integrity && (f.integrity = s.integrity),
            s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy),
            s.crossOrigin === 'use-credentials'
                ? (f.credentials = 'include')
                : s.crossOrigin === 'anonymous'
                  ? (f.credentials = 'omit')
                  : (f.credentials = 'same-origin'),
            f
        )
    }
    function o(s) {
        if (s.ep) return
        s.ep = !0
        const f = c(s)
        fetch(s.href, f)
    }
})()
function Nv(n) {
    return n &&
        n.__esModule &&
        Object.prototype.hasOwnProperty.call(n, 'default')
        ? n.default
        : n
}
var Vo = { exports: {} },
    Yu = {}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $h
function jv() {
    if ($h) return Yu
    $h = 1
    var n = Symbol.for('react.transitional.element'),
        i = Symbol.for('react.fragment')
    function c(o, s, f) {
        var h = null
        if (
            (f !== void 0 && (h = '' + f),
            s.key !== void 0 && (h = '' + s.key),
            'key' in s)
        ) {
            f = {}
            for (var v in s) v !== 'key' && (f[v] = s[v])
        } else f = s
        return (
            (s = f.ref),
            {
                $$typeof: n,
                type: o,
                key: h,
                ref: s !== void 0 ? s : null,
                props: f,
            }
        )
    }
    return (Yu.Fragment = i), (Yu.jsx = c), (Yu.jsxs = c), Yu
}
var Wh
function Lv() {
    return Wh || ((Wh = 1), (Vo.exports = jv())), Vo.exports
}
var H = Lv(),
    Qo = { exports: {} },
    Gu = {},
    Zo = { exports: {} },
    Ko = {}
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ph
function Hv() {
    return (
        Ph ||
            ((Ph = 1),
            (function (n) {
                function i(J, ve) {
                    var se = J.length
                    J.push(ve)
                    e: for (; 0 < se; ) {
                        var _e = (se - 1) >>> 1,
                            S = J[_e]
                        if (0 < s(S, ve)) (J[_e] = ve), (J[se] = S), (se = _e)
                        else break e
                    }
                }
                function c(J) {
                    return J.length === 0 ? null : J[0]
                }
                function o(J) {
                    if (J.length === 0) return null
                    var ve = J[0],
                        se = J.pop()
                    if (se !== ve) {
                        J[0] = se
                        e: for (
                            var _e = 0, S = J.length, Z = S >>> 1;
                            _e < Z;

                        ) {
                            var ce = 2 * (_e + 1) - 1,
                                le = J[ce],
                                P = ce + 1,
                                Te = J[P]
                            if (0 > s(le, se))
                                P < S && 0 > s(Te, le)
                                    ? ((J[_e] = Te), (J[P] = se), (_e = P))
                                    : ((J[_e] = le), (J[ce] = se), (_e = ce))
                            else if (P < S && 0 > s(Te, se))
                                (J[_e] = Te), (J[P] = se), (_e = P)
                            else break e
                        }
                    }
                    return ve
                }
                function s(J, ve) {
                    var se = J.sortIndex - ve.sortIndex
                    return se !== 0 ? se : J.id - ve.id
                }
                if (
                    ((n.unstable_now = void 0),
                    typeof performance == 'object' &&
                        typeof performance.now == 'function')
                ) {
                    var f = performance
                    n.unstable_now = function () {
                        return f.now()
                    }
                } else {
                    var h = Date,
                        v = h.now()
                    n.unstable_now = function () {
                        return h.now() - v
                    }
                }
                var p = [],
                    m = [],
                    g = 1,
                    x = null,
                    O = 3,
                    D = !1,
                    A = !1,
                    Y = !1,
                    z = typeof setTimeout == 'function' ? setTimeout : null,
                    q = typeof clearTimeout == 'function' ? clearTimeout : null,
                    V = typeof setImmediate < 'u' ? setImmediate : null
                function $(J) {
                    for (var ve = c(m); ve !== null; ) {
                        if (ve.callback === null) o(m)
                        else if (ve.startTime <= J)
                            o(m), (ve.sortIndex = ve.expirationTime), i(p, ve)
                        else break
                        ve = c(m)
                    }
                }
                function oe(J) {
                    if (((Y = !1), $(J), !A))
                        if (c(p) !== null) (A = !0), ht()
                        else {
                            var ve = c(m)
                            ve !== null && it(oe, ve.startTime - J)
                        }
                }
                var F = !1,
                    C = -1,
                    he = 5,
                    be = -1
                function k() {
                    return !(n.unstable_now() - be < he)
                }
                function fe() {
                    if (F) {
                        var J = n.unstable_now()
                        be = J
                        var ve = !0
                        try {
                            e: {
                                ;(A = !1),
                                    Y && ((Y = !1), q(C), (C = -1)),
                                    (D = !0)
                                var se = O
                                try {
                                    t: {
                                        for (
                                            $(J), x = c(p);
                                            x !== null &&
                                            !(x.expirationTime > J && k());

                                        ) {
                                            var _e = x.callback
                                            if (typeof _e == 'function') {
                                                ;(x.callback = null),
                                                    (O = x.priorityLevel)
                                                var S = _e(
                                                    x.expirationTime <= J,
                                                )
                                                if (
                                                    ((J = n.unstable_now()),
                                                    typeof S == 'function')
                                                ) {
                                                    ;(x.callback = S),
                                                        $(J),
                                                        (ve = !0)
                                                    break t
                                                }
                                                x === c(p) && o(p), $(J)
                                            } else o(p)
                                            x = c(p)
                                        }
                                        if (x !== null) ve = !0
                                        else {
                                            var Z = c(m)
                                            Z !== null &&
                                                it(oe, Z.startTime - J),
                                                (ve = !1)
                                        }
                                    }
                                    break e
                                } finally {
                                    ;(x = null), (O = se), (D = !1)
                                }
                                ve = void 0
                            }
                        } finally {
                            ve ? Le() : (F = !1)
                        }
                    }
                }
                var Le
                if (typeof V == 'function')
                    Le = function () {
                        V(fe)
                    }
                else if (typeof MessageChannel < 'u') {
                    var Ot = new MessageChannel(),
                        Dt = Ot.port2
                    ;(Ot.port1.onmessage = fe),
                        (Le = function () {
                            Dt.postMessage(null)
                        })
                } else
                    Le = function () {
                        z(fe, 0)
                    }
                function ht() {
                    F || ((F = !0), Le())
                }
                function it(J, ve) {
                    C = z(function () {
                        J(n.unstable_now())
                    }, ve)
                }
                ;(n.unstable_IdlePriority = 5),
                    (n.unstable_ImmediatePriority = 1),
                    (n.unstable_LowPriority = 4),
                    (n.unstable_NormalPriority = 3),
                    (n.unstable_Profiling = null),
                    (n.unstable_UserBlockingPriority = 2),
                    (n.unstable_cancelCallback = function (J) {
                        J.callback = null
                    }),
                    (n.unstable_continueExecution = function () {
                        A || D || ((A = !0), ht())
                    }),
                    (n.unstable_forceFrameRate = function (J) {
                        0 > J || 125 < J
                            ? console.error(
                                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                              )
                            : (he = 0 < J ? Math.floor(1e3 / J) : 5)
                    }),
                    (n.unstable_getCurrentPriorityLevel = function () {
                        return O
                    }),
                    (n.unstable_getFirstCallbackNode = function () {
                        return c(p)
                    }),
                    (n.unstable_next = function (J) {
                        switch (O) {
                            case 1:
                            case 2:
                            case 3:
                                var ve = 3
                                break
                            default:
                                ve = O
                        }
                        var se = O
                        O = ve
                        try {
                            return J()
                        } finally {
                            O = se
                        }
                    }),
                    (n.unstable_pauseExecution = function () {}),
                    (n.unstable_requestPaint = function () {}),
                    (n.unstable_runWithPriority = function (J, ve) {
                        switch (J) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break
                            default:
                                J = 3
                        }
                        var se = O
                        O = J
                        try {
                            return ve()
                        } finally {
                            O = se
                        }
                    }),
                    (n.unstable_scheduleCallback = function (J, ve, se) {
                        var _e = n.unstable_now()
                        switch (
                            (typeof se == 'object' && se !== null
                                ? ((se = se.delay),
                                  (se =
                                      typeof se == 'number' && 0 < se
                                          ? _e + se
                                          : _e))
                                : (se = _e),
                            J)
                        ) {
                            case 1:
                                var S = -1
                                break
                            case 2:
                                S = 250
                                break
                            case 5:
                                S = 1073741823
                                break
                            case 4:
                                S = 1e4
                                break
                            default:
                                S = 5e3
                        }
                        return (
                            (S = se + S),
                            (J = {
                                id: g++,
                                callback: ve,
                                priorityLevel: J,
                                startTime: se,
                                expirationTime: S,
                                sortIndex: -1,
                            }),
                            se > _e
                                ? ((J.sortIndex = se),
                                  i(m, J),
                                  c(p) === null &&
                                      J === c(m) &&
                                      (Y ? (q(C), (C = -1)) : (Y = !0),
                                      it(oe, se - _e)))
                                : ((J.sortIndex = S),
                                  i(p, J),
                                  A || D || ((A = !0), ht())),
                            J
                        )
                    }),
                    (n.unstable_shouldYield = k),
                    (n.unstable_wrapCallback = function (J) {
                        var ve = O
                        return function () {
                            var se = O
                            O = ve
                            try {
                                return J.apply(this, arguments)
                            } finally {
                                O = se
                            }
                        }
                    })
            })(Ko)),
        Ko
    )
}
var Ih
function Bv() {
    return Ih || ((Ih = 1), (Zo.exports = Hv())), Zo.exports
}
var ko = { exports: {} },
    Ee = {}
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var em
function qv() {
    if (em) return Ee
    em = 1
    var n = Symbol.for('react.transitional.element'),
        i = Symbol.for('react.portal'),
        c = Symbol.for('react.fragment'),
        o = Symbol.for('react.strict_mode'),
        s = Symbol.for('react.profiler'),
        f = Symbol.for('react.consumer'),
        h = Symbol.for('react.context'),
        v = Symbol.for('react.forward_ref'),
        p = Symbol.for('react.suspense'),
        m = Symbol.for('react.memo'),
        g = Symbol.for('react.lazy'),
        x = Symbol.iterator
    function O(S) {
        return S === null || typeof S != 'object'
            ? null
            : ((S = (x && S[x]) || S['@@iterator']),
              typeof S == 'function' ? S : null)
    }
    var D = {
            isMounted: function () {
                return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        A = Object.assign,
        Y = {}
    function z(S, Z, ce) {
        ;(this.props = S),
            (this.context = Z),
            (this.refs = Y),
            (this.updater = ce || D)
    }
    ;(z.prototype.isReactComponent = {}),
        (z.prototype.setState = function (S, Z) {
            if (typeof S != 'object' && typeof S != 'function' && S != null)
                throw Error(
                    'takes an object of state variables to update or a function which returns an object of state variables.',
                )
            this.updater.enqueueSetState(this, S, Z, 'setState')
        }),
        (z.prototype.forceUpdate = function (S) {
            this.updater.enqueueForceUpdate(this, S, 'forceUpdate')
        })
    function q() {}
    q.prototype = z.prototype
    function V(S, Z, ce) {
        ;(this.props = S),
            (this.context = Z),
            (this.refs = Y),
            (this.updater = ce || D)
    }
    var $ = (V.prototype = new q())
    ;($.constructor = V), A($, z.prototype), ($.isPureReactComponent = !0)
    var oe = Array.isArray,
        F = { H: null, A: null, T: null, S: null },
        C = Object.prototype.hasOwnProperty
    function he(S, Z, ce, le, P, Te) {
        return (
            (ce = Te.ref),
            {
                $$typeof: n,
                type: S,
                key: Z,
                ref: ce !== void 0 ? ce : null,
                props: Te,
            }
        )
    }
    function be(S, Z) {
        return he(S.type, Z, void 0, void 0, void 0, S.props)
    }
    function k(S) {
        return typeof S == 'object' && S !== null && S.$$typeof === n
    }
    function fe(S) {
        var Z = { '=': '=0', ':': '=2' }
        return (
            '$' +
            S.replace(/[=:]/g, function (ce) {
                return Z[ce]
            })
        )
    }
    var Le = /\/+/g
    function Ot(S, Z) {
        return typeof S == 'object' && S !== null && S.key != null
            ? fe('' + S.key)
            : Z.toString(36)
    }
    function Dt() {}
    function ht(S) {
        switch (S.status) {
            case 'fulfilled':
                return S.value
            case 'rejected':
                throw S.reason
            default:
                switch (
                    (typeof S.status == 'string'
                        ? S.then(Dt, Dt)
                        : ((S.status = 'pending'),
                          S.then(
                              function (Z) {
                                  S.status === 'pending' &&
                                      ((S.status = 'fulfilled'), (S.value = Z))
                              },
                              function (Z) {
                                  S.status === 'pending' &&
                                      ((S.status = 'rejected'), (S.reason = Z))
                              },
                          )),
                    S.status)
                ) {
                    case 'fulfilled':
                        return S.value
                    case 'rejected':
                        throw S.reason
                }
        }
        throw S
    }
    function it(S, Z, ce, le, P) {
        var Te = typeof S
        ;(Te === 'undefined' || Te === 'boolean') && (S = null)
        var pe = !1
        if (S === null) pe = !0
        else
            switch (Te) {
                case 'bigint':
                case 'string':
                case 'number':
                    pe = !0
                    break
                case 'object':
                    switch (S.$$typeof) {
                        case n:
                        case i:
                            pe = !0
                            break
                        case g:
                            return (
                                (pe = S._init), it(pe(S._payload), Z, ce, le, P)
                            )
                    }
            }
        if (pe)
            return (
                (P = P(S)),
                (pe = le === '' ? '.' + Ot(S, 0) : le),
                oe(P)
                    ? ((ce = ''),
                      pe != null && (ce = pe.replace(Le, '$&/') + '/'),
                      it(P, Z, ce, '', function ($e) {
                          return $e
                      }))
                    : P != null &&
                      (k(P) &&
                          (P = be(
                              P,
                              ce +
                                  (P.key == null || (S && S.key === P.key)
                                      ? ''
                                      : ('' + P.key).replace(Le, '$&/') + '/') +
                                  pe,
                          )),
                      Z.push(P)),
                1
            )
        pe = 0
        var mt = le === '' ? '.' : le + ':'
        if (oe(S))
            for (var Ue = 0; Ue < S.length; Ue++)
                (le = S[Ue]),
                    (Te = mt + Ot(le, Ue)),
                    (pe += it(le, Z, ce, Te, P))
        else if (((Ue = O(S)), typeof Ue == 'function'))
            for (S = Ue.call(S), Ue = 0; !(le = S.next()).done; )
                (le = le.value),
                    (Te = mt + Ot(le, Ue++)),
                    (pe += it(le, Z, ce, Te, P))
        else if (Te === 'object') {
            if (typeof S.then == 'function') return it(ht(S), Z, ce, le, P)
            throw (
                ((Z = String(S)),
                Error(
                    'Objects are not valid as a React child (found: ' +
                        (Z === '[object Object]'
                            ? 'object with keys {' +
                              Object.keys(S).join(', ') +
                              '}'
                            : Z) +
                        '). If you meant to render a collection of children, use an array instead.',
                ))
            )
        }
        return pe
    }
    function J(S, Z, ce) {
        if (S == null) return S
        var le = [],
            P = 0
        return (
            it(S, le, '', '', function (Te) {
                return Z.call(ce, Te, P++)
            }),
            le
        )
    }
    function ve(S) {
        if (S._status === -1) {
            var Z = S._result
            ;(Z = Z()),
                Z.then(
                    function (ce) {
                        ;(S._status === 0 || S._status === -1) &&
                            ((S._status = 1), (S._result = ce))
                    },
                    function (ce) {
                        ;(S._status === 0 || S._status === -1) &&
                            ((S._status = 2), (S._result = ce))
                    },
                ),
                S._status === -1 && ((S._status = 0), (S._result = Z))
        }
        if (S._status === 1) return S._result.default
        throw S._result
    }
    var se =
        typeof reportError == 'function'
            ? reportError
            : function (S) {
                  if (
                      typeof window == 'object' &&
                      typeof window.ErrorEvent == 'function'
                  ) {
                      var Z = new window.ErrorEvent('error', {
                          bubbles: !0,
                          cancelable: !0,
                          message:
                              typeof S == 'object' &&
                              S !== null &&
                              typeof S.message == 'string'
                                  ? String(S.message)
                                  : String(S),
                          error: S,
                      })
                      if (!window.dispatchEvent(Z)) return
                  } else if (
                      typeof process == 'object' &&
                      typeof process.emit == 'function'
                  ) {
                      process.emit('uncaughtException', S)
                      return
                  }
                  console.error(S)
              }
    function _e() {}
    return (
        (Ee.Children = {
            map: J,
            forEach: function (S, Z, ce) {
                J(
                    S,
                    function () {
                        Z.apply(this, arguments)
                    },
                    ce,
                )
            },
            count: function (S) {
                var Z = 0
                return (
                    J(S, function () {
                        Z++
                    }),
                    Z
                )
            },
            toArray: function (S) {
                return (
                    J(S, function (Z) {
                        return Z
                    }) || []
                )
            },
            only: function (S) {
                if (!k(S))
                    throw Error(
                        'React.Children.only expected to receive a single React element child.',
                    )
                return S
            },
        }),
        (Ee.Component = z),
        (Ee.Fragment = c),
        (Ee.Profiler = s),
        (Ee.PureComponent = V),
        (Ee.StrictMode = o),
        (Ee.Suspense = p),
        (Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            F),
        (Ee.act = function () {
            throw Error(
                'act(...) is not supported in production builds of React.',
            )
        }),
        (Ee.cache = function (S) {
            return function () {
                return S.apply(null, arguments)
            }
        }),
        (Ee.cloneElement = function (S, Z, ce) {
            if (S == null)
                throw Error(
                    'The argument must be a React element, but you passed ' +
                        S +
                        '.',
                )
            var le = A({}, S.props),
                P = S.key,
                Te = void 0
            if (Z != null)
                for (pe in (Z.ref !== void 0 && (Te = void 0),
                Z.key !== void 0 && (P = '' + Z.key),
                Z))
                    !C.call(Z, pe) ||
                        pe === 'key' ||
                        pe === '__self' ||
                        pe === '__source' ||
                        (pe === 'ref' && Z.ref === void 0) ||
                        (le[pe] = Z[pe])
            var pe = arguments.length - 2
            if (pe === 1) le.children = ce
            else if (1 < pe) {
                for (var mt = Array(pe), Ue = 0; Ue < pe; Ue++)
                    mt[Ue] = arguments[Ue + 2]
                le.children = mt
            }
            return he(S.type, P, void 0, void 0, Te, le)
        }),
        (Ee.createContext = function (S) {
            return (
                (S = {
                    $$typeof: h,
                    _currentValue: S,
                    _currentValue2: S,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                }),
                (S.Provider = S),
                (S.Consumer = { $$typeof: f, _context: S }),
                S
            )
        }),
        (Ee.createElement = function (S, Z, ce) {
            var le,
                P = {},
                Te = null
            if (Z != null)
                for (le in (Z.key !== void 0 && (Te = '' + Z.key), Z))
                    C.call(Z, le) &&
                        le !== 'key' &&
                        le !== '__self' &&
                        le !== '__source' &&
                        (P[le] = Z[le])
            var pe = arguments.length - 2
            if (pe === 1) P.children = ce
            else if (1 < pe) {
                for (var mt = Array(pe), Ue = 0; Ue < pe; Ue++)
                    mt[Ue] = arguments[Ue + 2]
                P.children = mt
            }
            if (S && S.defaultProps)
                for (le in ((pe = S.defaultProps), pe))
                    P[le] === void 0 && (P[le] = pe[le])
            return he(S, Te, void 0, void 0, null, P)
        }),
        (Ee.createRef = function () {
            return { current: null }
        }),
        (Ee.forwardRef = function (S) {
            return { $$typeof: v, render: S }
        }),
        (Ee.isValidElement = k),
        (Ee.lazy = function (S) {
            return {
                $$typeof: g,
                _payload: { _status: -1, _result: S },
                _init: ve,
            }
        }),
        (Ee.memo = function (S, Z) {
            return { $$typeof: m, type: S, compare: Z === void 0 ? null : Z }
        }),
        (Ee.startTransition = function (S) {
            var Z = F.T,
                ce = {}
            F.T = ce
            try {
                var le = S(),
                    P = F.S
                P !== null && P(ce, le),
                    typeof le == 'object' &&
                        le !== null &&
                        typeof le.then == 'function' &&
                        le.then(_e, se)
            } catch (Te) {
                se(Te)
            } finally {
                F.T = Z
            }
        }),
        (Ee.unstable_useCacheRefresh = function () {
            return F.H.useCacheRefresh()
        }),
        (Ee.use = function (S) {
            return F.H.use(S)
        }),
        (Ee.useActionState = function (S, Z, ce) {
            return F.H.useActionState(S, Z, ce)
        }),
        (Ee.useCallback = function (S, Z) {
            return F.H.useCallback(S, Z)
        }),
        (Ee.useContext = function (S) {
            return F.H.useContext(S)
        }),
        (Ee.useDebugValue = function () {}),
        (Ee.useDeferredValue = function (S, Z) {
            return F.H.useDeferredValue(S, Z)
        }),
        (Ee.useEffect = function (S, Z) {
            return F.H.useEffect(S, Z)
        }),
        (Ee.useId = function () {
            return F.H.useId()
        }),
        (Ee.useImperativeHandle = function (S, Z, ce) {
            return F.H.useImperativeHandle(S, Z, ce)
        }),
        (Ee.useInsertionEffect = function (S, Z) {
            return F.H.useInsertionEffect(S, Z)
        }),
        (Ee.useLayoutEffect = function (S, Z) {
            return F.H.useLayoutEffect(S, Z)
        }),
        (Ee.useMemo = function (S, Z) {
            return F.H.useMemo(S, Z)
        }),
        (Ee.useOptimistic = function (S, Z) {
            return F.H.useOptimistic(S, Z)
        }),
        (Ee.useReducer = function (S, Z, ce) {
            return F.H.useReducer(S, Z, ce)
        }),
        (Ee.useRef = function (S) {
            return F.H.useRef(S)
        }),
        (Ee.useState = function (S) {
            return F.H.useState(S)
        }),
        (Ee.useSyncExternalStore = function (S, Z, ce) {
            return F.H.useSyncExternalStore(S, Z, ce)
        }),
        (Ee.useTransition = function () {
            return F.H.useTransition()
        }),
        (Ee.version = '19.0.0'),
        Ee
    )
}
var tm
function fs() {
    return tm || ((tm = 1), (ko.exports = qv())), ko.exports
}
var Jo = { exports: {} },
    xt = {}
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lm
function Yv() {
    if (lm) return xt
    lm = 1
    var n = fs()
    function i(p) {
        var m = 'https://react.dev/errors/' + p
        if (1 < arguments.length) {
            m += '?args[]=' + encodeURIComponent(arguments[1])
            for (var g = 2; g < arguments.length; g++)
                m += '&args[]=' + encodeURIComponent(arguments[g])
        }
        return (
            'Minified React error #' +
            p +
            '; visit ' +
            m +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        )
    }
    function c() {}
    var o = {
            d: {
                f: c,
                r: function () {
                    throw Error(i(522))
                },
                D: c,
                C: c,
                L: c,
                m: c,
                X: c,
                S: c,
                M: c,
            },
            p: 0,
            findDOMNode: null,
        },
        s = Symbol.for('react.portal')
    function f(p, m, g) {
        var x =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null
        return {
            $$typeof: s,
            key: x == null ? null : '' + x,
            children: p,
            containerInfo: m,
            implementation: g,
        }
    }
    var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
    function v(p, m) {
        if (p === 'font') return ''
        if (typeof m == 'string') return m === 'use-credentials' ? m : ''
    }
    return (
        (xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
        (xt.createPortal = function (p, m) {
            var g =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null
            if (
                !m ||
                (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            )
                throw Error(i(299))
            return f(p, m, null, g)
        }),
        (xt.flushSync = function (p) {
            var m = h.T,
                g = o.p
            try {
                if (((h.T = null), (o.p = 2), p)) return p()
            } finally {
                ;(h.T = m), (o.p = g), o.d.f()
            }
        }),
        (xt.preconnect = function (p, m) {
            typeof p == 'string' &&
                (m
                    ? ((m = m.crossOrigin),
                      (m =
                          typeof m == 'string'
                              ? m === 'use-credentials'
                                  ? m
                                  : ''
                              : void 0))
                    : (m = null),
                o.d.C(p, m))
        }),
        (xt.prefetchDNS = function (p) {
            typeof p == 'string' && o.d.D(p)
        }),
        (xt.preinit = function (p, m) {
            if (typeof p == 'string' && m && typeof m.as == 'string') {
                var g = m.as,
                    x = v(g, m.crossOrigin),
                    O = typeof m.integrity == 'string' ? m.integrity : void 0,
                    D =
                        typeof m.fetchPriority == 'string'
                            ? m.fetchPriority
                            : void 0
                g === 'style'
                    ? o.d.S(
                          p,
                          typeof m.precedence == 'string'
                              ? m.precedence
                              : void 0,
                          { crossOrigin: x, integrity: O, fetchPriority: D },
                      )
                    : g === 'script' &&
                      o.d.X(p, {
                          crossOrigin: x,
                          integrity: O,
                          fetchPriority: D,
                          nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
                      })
            }
        }),
        (xt.preinitModule = function (p, m) {
            if (typeof p == 'string')
                if (typeof m == 'object' && m !== null) {
                    if (m.as == null || m.as === 'script') {
                        var g = v(m.as, m.crossOrigin)
                        o.d.M(p, {
                            crossOrigin: g,
                            integrity:
                                typeof m.integrity == 'string'
                                    ? m.integrity
                                    : void 0,
                            nonce:
                                typeof m.nonce == 'string' ? m.nonce : void 0,
                        })
                    }
                } else m == null && o.d.M(p)
        }),
        (xt.preload = function (p, m) {
            if (
                typeof p == 'string' &&
                typeof m == 'object' &&
                m !== null &&
                typeof m.as == 'string'
            ) {
                var g = m.as,
                    x = v(g, m.crossOrigin)
                o.d.L(p, g, {
                    crossOrigin: x,
                    integrity:
                        typeof m.integrity == 'string' ? m.integrity : void 0,
                    nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
                    type: typeof m.type == 'string' ? m.type : void 0,
                    fetchPriority:
                        typeof m.fetchPriority == 'string'
                            ? m.fetchPriority
                            : void 0,
                    referrerPolicy:
                        typeof m.referrerPolicy == 'string'
                            ? m.referrerPolicy
                            : void 0,
                    imageSrcSet:
                        typeof m.imageSrcSet == 'string'
                            ? m.imageSrcSet
                            : void 0,
                    imageSizes:
                        typeof m.imageSizes == 'string' ? m.imageSizes : void 0,
                    media: typeof m.media == 'string' ? m.media : void 0,
                })
            }
        }),
        (xt.preloadModule = function (p, m) {
            if (typeof p == 'string')
                if (m) {
                    var g = v(m.as, m.crossOrigin)
                    o.d.m(p, {
                        as:
                            typeof m.as == 'string' && m.as !== 'script'
                                ? m.as
                                : void 0,
                        crossOrigin: g,
                        integrity:
                            typeof m.integrity == 'string'
                                ? m.integrity
                                : void 0,
                    })
                } else o.d.m(p)
        }),
        (xt.requestFormReset = function (p) {
            o.d.r(p)
        }),
        (xt.unstable_batchedUpdates = function (p, m) {
            return p(m)
        }),
        (xt.useFormState = function (p, m, g) {
            return h.H.useFormState(p, m, g)
        }),
        (xt.useFormStatus = function () {
            return h.H.useHostTransitionStatus()
        }),
        (xt.version = '19.0.0'),
        xt
    )
}
var am
function Ym() {
    if (am) return Jo.exports
    am = 1
    function n() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (i) {
                console.error(i)
            }
    }
    return n(), (Jo.exports = Yv()), Jo.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nm
function Gv() {
    if (nm) return Gu
    nm = 1
    var n = Bv(),
        i = fs(),
        c = Ym()
    function o(e) {
        var t = 'https://react.dev/errors/' + e
        if (1 < arguments.length) {
            t += '?args[]=' + encodeURIComponent(arguments[1])
            for (var l = 2; l < arguments.length; l++)
                t += '&args[]=' + encodeURIComponent(arguments[l])
        }
        return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        )
    }
    function s(e) {
        return !(
            !e ||
            (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        )
    }
    var f = Symbol.for('react.element'),
        h = Symbol.for('react.transitional.element'),
        v = Symbol.for('react.portal'),
        p = Symbol.for('react.fragment'),
        m = Symbol.for('react.strict_mode'),
        g = Symbol.for('react.profiler'),
        x = Symbol.for('react.provider'),
        O = Symbol.for('react.consumer'),
        D = Symbol.for('react.context'),
        A = Symbol.for('react.forward_ref'),
        Y = Symbol.for('react.suspense'),
        z = Symbol.for('react.suspense_list'),
        q = Symbol.for('react.memo'),
        V = Symbol.for('react.lazy'),
        $ = Symbol.for('react.offscreen'),
        oe = Symbol.for('react.memo_cache_sentinel'),
        F = Symbol.iterator
    function C(e) {
        return e === null || typeof e != 'object'
            ? null
            : ((e = (F && e[F]) || e['@@iterator']),
              typeof e == 'function' ? e : null)
    }
    var he = Symbol.for('react.client.reference')
    function be(e) {
        if (e == null) return null
        if (typeof e == 'function')
            return e.$$typeof === he ? null : e.displayName || e.name || null
        if (typeof e == 'string') return e
        switch (e) {
            case p:
                return 'Fragment'
            case v:
                return 'Portal'
            case g:
                return 'Profiler'
            case m:
                return 'StrictMode'
            case Y:
                return 'Suspense'
            case z:
                return 'SuspenseList'
        }
        if (typeof e == 'object')
            switch (e.$$typeof) {
                case D:
                    return (e.displayName || 'Context') + '.Provider'
                case O:
                    return (e._context.displayName || 'Context') + '.Consumer'
                case A:
                    var t = e.render
                    return (
                        (e = e.displayName),
                        e ||
                            ((e = t.displayName || t.name || ''),
                            (e =
                                e !== ''
                                    ? 'ForwardRef(' + e + ')'
                                    : 'ForwardRef')),
                        e
                    )
                case q:
                    return (
                        (t = e.displayName || null),
                        t !== null ? t : be(e.type) || 'Memo'
                    )
                case V:
                    ;(t = e._payload), (e = e._init)
                    try {
                        return be(e(t))
                    } catch {}
            }
        return null
    }
    var k = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        fe = Object.assign,
        Le,
        Ot
    function Dt(e) {
        if (Le === void 0)
            try {
                throw Error()
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/)
                ;(Le = (t && t[1]) || ''),
                    (Ot =
                        -1 <
                        l.stack.indexOf(`
    at`)
                            ? ' (<anonymous>)'
                            : -1 < l.stack.indexOf('@')
                              ? '@unknown:0:0'
                              : '')
            }
        return (
            `
` +
            Le +
            e +
            Ot
        )
    }
    var ht = !1
    function it(e, t) {
        if (!e || ht) return ''
        ht = !0
        var l = Error.prepareStackTrace
        Error.prepareStackTrace = void 0
        try {
            var a = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var Q = function () {
                                throw Error()
                            }
                            if (
                                (Object.defineProperty(Q.prototype, 'props', {
                                    set: function () {
                                        throw Error()
                                    },
                                }),
                                typeof Reflect == 'object' && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(Q, [])
                                } catch (B) {
                                    var N = B
                                }
                                Reflect.construct(e, [], Q)
                            } else {
                                try {
                                    Q.call()
                                } catch (B) {
                                    N = B
                                }
                                e.call(Q.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (B) {
                                N = B
                            }
                            ;(Q = e()) &&
                                typeof Q.catch == 'function' &&
                                Q.catch(function () {})
                        }
                    } catch (B) {
                        if (B && N && typeof B.stack == 'string')
                            return [B.stack, N.stack]
                    }
                    return [null, null]
                },
            }
            a.DetermineComponentFrameRoot.displayName =
                'DetermineComponentFrameRoot'
            var u = Object.getOwnPropertyDescriptor(
                a.DetermineComponentFrameRoot,
                'name',
            )
            u &&
                u.configurable &&
                Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
                    value: 'DetermineComponentFrameRoot',
                })
            var r = a.DetermineComponentFrameRoot(),
                d = r[0],
                y = r[1]
            if (d && y) {
                var b = d.split(`
`),
                    T = y.split(`
`)
                for (
                    u = a = 0;
                    a < b.length &&
                    !b[a].includes('DetermineComponentFrameRoot');

                )
                    a++
                for (
                    ;
                    u < T.length &&
                    !T[u].includes('DetermineComponentFrameRoot');

                )
                    u++
                if (a === b.length || u === T.length)
                    for (
                        a = b.length - 1, u = T.length - 1;
                        1 <= a && 0 <= u && b[a] !== T[u];

                    )
                        u--
                for (; 1 <= a && 0 <= u; a--, u--)
                    if (b[a] !== T[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if ((a--, u--, 0 > u || b[a] !== T[u])) {
                                    var G =
                                        `
` + b[a].replace(' at new ', ' at ')
                                    return (
                                        e.displayName &&
                                            G.includes('<anonymous>') &&
                                            (G = G.replace(
                                                '<anonymous>',
                                                e.displayName,
                                            )),
                                        G
                                    )
                                }
                            while (1 <= a && 0 <= u)
                        break
                    }
            }
        } finally {
            ;(ht = !1), (Error.prepareStackTrace = l)
        }
        return (l = e ? e.displayName || e.name : '') ? Dt(l) : ''
    }
    function J(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Dt(e.type)
            case 16:
                return Dt('Lazy')
            case 13:
                return Dt('Suspense')
            case 19:
                return Dt('SuspenseList')
            case 0:
            case 15:
                return (e = it(e.type, !1)), e
            case 11:
                return (e = it(e.type.render, !1)), e
            case 1:
                return (e = it(e.type, !0)), e
            default:
                return ''
        }
    }
    function ve(e) {
        try {
            var t = ''
            do (t += J(e)), (e = e.return)
            while (e)
            return t
        } catch (l) {
            return (
                `
Error generating stack: ` +
                l.message +
                `
` +
                l.stack
            )
        }
    }
    function se(e) {
        var t = e,
            l = e
        if (e.alternate) for (; t.return; ) t = t.return
        else {
            e = t
            do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return)
            while (e)
        }
        return t.tag === 3 ? l : null
    }
    function _e(e) {
        if (e.tag === 13) {
            var t = e.memoizedState
            if (
                (t === null &&
                    ((e = e.alternate), e !== null && (t = e.memoizedState)),
                t !== null)
            )
                return t.dehydrated
        }
        return null
    }
    function S(e) {
        if (se(e) !== e) throw Error(o(188))
    }
    function Z(e) {
        var t = e.alternate
        if (!t) {
            if (((t = se(e)), t === null)) throw Error(o(188))
            return t !== e ? null : e
        }
        for (var l = e, a = t; ; ) {
            var u = l.return
            if (u === null) break
            var r = u.alternate
            if (r === null) {
                if (((a = u.return), a !== null)) {
                    l = a
                    continue
                }
                break
            }
            if (u.child === r.child) {
                for (r = u.child; r; ) {
                    if (r === l) return S(u), e
                    if (r === a) return S(u), t
                    r = r.sibling
                }
                throw Error(o(188))
            }
            if (l.return !== a.return) (l = u), (a = r)
            else {
                for (var d = !1, y = u.child; y; ) {
                    if (y === l) {
                        ;(d = !0), (l = u), (a = r)
                        break
                    }
                    if (y === a) {
                        ;(d = !0), (a = u), (l = r)
                        break
                    }
                    y = y.sibling
                }
                if (!d) {
                    for (y = r.child; y; ) {
                        if (y === l) {
                            ;(d = !0), (l = r), (a = u)
                            break
                        }
                        if (y === a) {
                            ;(d = !0), (a = r), (l = u)
                            break
                        }
                        y = y.sibling
                    }
                    if (!d) throw Error(o(189))
                }
            }
            if (l.alternate !== a) throw Error(o(190))
        }
        if (l.tag !== 3) throw Error(o(188))
        return l.stateNode.current === l ? e : t
    }
    function ce(e) {
        var t = e.tag
        if (t === 5 || t === 26 || t === 27 || t === 6) return e
        for (e = e.child; e !== null; ) {
            if (((t = ce(e)), t !== null)) return t
            e = e.sibling
        }
        return null
    }
    var le = Array.isArray,
        P = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Te = { pending: !1, data: null, method: null, action: null },
        pe = [],
        mt = -1
    function Ue(e) {
        return { current: e }
    }
    function $e(e) {
        0 > mt || ((e.current = pe[mt]), (pe[mt] = null), mt--)
    }
    function Re(e, t) {
        mt++, (pe[mt] = e.current), (e.current = t)
    }
    var yt = Ue(null),
        Fl = Ue(null),
        ml = Ue(null),
        Xt = Ue(null)
    function tn(e, t) {
        switch ((Re(ml, t), Re(Fl, e), Re(yt, null), (e = t.nodeType), e)) {
            case 9:
            case 11:
                t = (t = t.documentElement) && (t = t.namespaceURI) ? Ah(t) : 0
                break
            default:
                if (
                    ((e = e === 8 ? t.parentNode : t),
                    (t = e.tagName),
                    (e = e.namespaceURI))
                )
                    (e = Ah(e)), (t = Oh(e, t))
                else
                    switch (t) {
                        case 'svg':
                            t = 1
                            break
                        case 'math':
                            t = 2
                            break
                        default:
                            t = 0
                    }
        }
        $e(yt), Re(yt, t)
    }
    function $l() {
        $e(yt), $e(Fl), $e(ml)
    }
    function ln(e) {
        e.memoizedState !== null && Re(Xt, e)
        var t = yt.current,
            l = Oh(t, e.type)
        t !== l && (Re(Fl, e), Re(yt, l))
    }
    function an(e) {
        Fl.current === e && ($e(yt), $e(Fl)),
            Xt.current === e && ($e(Xt), (ju._currentValue = Te))
    }
    var Vn = Object.prototype.hasOwnProperty,
        Qn = n.unstable_scheduleCallback,
        Zn = n.unstable_cancelCallback,
        Ol = n.unstable_shouldYield,
        Ta = n.unstable_requestPaint,
        Nt = n.unstable_now,
        Kn = n.unstable_getCurrentPriorityLevel,
        ul = n.unstable_ImmediatePriority,
        Vt = n.unstable_UserBlockingPriority,
        xa = n.unstable_NormalPriority,
        kn = n.unstable_LowPriority,
        ai = n.unstable_IdlePriority,
        yl = n.log,
        ni = n.unstable_setDisableYieldValue,
        Wl = null,
        Rt = null
    function Hr(e) {
        if (Rt && typeof Rt.onCommitFiberRoot == 'function')
            try {
                Rt.onCommitFiberRoot(
                    Wl,
                    e,
                    void 0,
                    (e.current.flags & 128) === 128,
                )
            } catch {}
    }
    function il(e) {
        if (
            (typeof yl == 'function' && ni(e),
            Rt && typeof Rt.setStrictMode == 'function')
        )
            try {
                Rt.setStrictMode(Wl, e)
            } catch {}
    }
    var ot = Math.clz32 ? Math.clz32 : Br,
        ui = Math.log,
        Jn = Math.LN2
    function Br(e) {
        return (e >>>= 0), e === 0 ? 32 : (31 - ((ui(e) / Jn) | 0)) | 0
    }
    var Aa = 128,
        nn = 4194304
    function vl(e) {
        var t = e & 42
        if (t !== 0) return t
        switch (e & -e) {
            case 1:
                return 1
            case 2:
                return 2
            case 4:
                return 4
            case 8:
                return 8
            case 16:
                return 16
            case 32:
                return 32
            case 64:
                return 64
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194176
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560
            case 67108864:
                return 67108864
            case 134217728:
                return 134217728
            case 268435456:
                return 268435456
            case 536870912:
                return 536870912
            case 1073741824:
                return 0
            default:
                return e
        }
    }
    function Dl(e, t) {
        var l = e.pendingLanes
        if (l === 0) return 0
        var a = 0,
            u = e.suspendedLanes,
            r = e.pingedLanes,
            d = e.warmLanes
        e = e.finishedLanes !== 0
        var y = l & 134217727
        return (
            y !== 0
                ? ((l = y & ~u),
                  l !== 0
                      ? (a = vl(l))
                      : ((r &= y),
                        r !== 0
                            ? (a = vl(r))
                            : e || ((d = y & ~d), d !== 0 && (a = vl(d)))))
                : ((y = l & ~u),
                  y !== 0
                      ? (a = vl(y))
                      : r !== 0
                        ? (a = vl(r))
                        : e || ((d = l & ~d), d !== 0 && (a = vl(d)))),
            a === 0
                ? 0
                : t !== 0 &&
                    t !== a &&
                    (t & u) === 0 &&
                    ((u = a & -a),
                    (d = t & -t),
                    u >= d || (u === 32 && (d & 4194176) !== 0))
                  ? t
                  : a
        )
    }
    function pl(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function qr(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
                return t + 250
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1
            default:
                return -1
        }
    }
    function ii() {
        var e = Aa
        return (Aa <<= 1), (Aa & 4194176) === 0 && (Aa = 128), e
    }
    function E() {
        var e = nn
        return (nn <<= 1), (nn & 62914560) === 0 && (nn = 4194304), e
    }
    function M(e) {
        for (var t = [], l = 0; 31 > l; l++) t.push(e)
        return t
    }
    function j(e, t) {
        ;(e.pendingLanes |= t),
            t !== 268435456 &&
                ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0))
    }
    function K(e, t, l, a, u, r) {
        var d = e.pendingLanes
        ;(e.pendingLanes = l),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.warmLanes = 0),
            (e.expiredLanes &= l),
            (e.entangledLanes &= l),
            (e.errorRecoveryDisabledLanes &= l),
            (e.shellSuspendCounter = 0)
        var y = e.entanglements,
            b = e.expirationTimes,
            T = e.hiddenUpdates
        for (l = d & ~l; 0 < l; ) {
            var G = 31 - ot(l),
                Q = 1 << G
            ;(y[G] = 0), (b[G] = -1)
            var N = T[G]
            if (N !== null)
                for (T[G] = null, G = 0; G < N.length; G++) {
                    var B = N[G]
                    B !== null && (B.lane &= -536870913)
                }
            l &= ~Q
        }
        a !== 0 && I(e, a, 0),
            r !== 0 &&
                u === 0 &&
                e.tag !== 0 &&
                (e.suspendedLanes |= r & ~(d & ~t))
    }
    function I(e, t, l) {
        ;(e.pendingLanes |= t), (e.suspendedLanes &= ~t)
        var a = 31 - ot(t)
        ;(e.entangledLanes |= t),
            (e.entanglements[a] =
                e.entanglements[a] | 1073741824 | (l & 4194218))
    }
    function ie(e, t) {
        var l = (e.entangledLanes |= t)
        for (e = e.entanglements; l; ) {
            var a = 31 - ot(l),
                u = 1 << a
            ;(u & t) | (e[a] & t) && (e[a] |= t), (l &= ~u)
        }
    }
    function ye(e) {
        return (
            (e &= -e),
            2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
        )
    }
    function ee() {
        var e = P.p
        return e !== 0
            ? e
            : ((e = window.event), e === void 0 ? 32 : Qh(e.type))
    }
    function ae(e, t) {
        var l = P.p
        try {
            return (P.p = e), t()
        } finally {
            P.p = l
        }
    }
    var W = Math.random().toString(36).slice(2),
        ne = '__reactFiber$' + W,
        de = '__reactProps$' + W,
        je = '__reactContainer$' + W,
        tt = '__reactEvents$' + W,
        Qe = '__reactListeners$' + W,
        qe = '__reactHandles$' + W,
        We = '__reactResources$' + W,
        Qt = '__reactMarker$' + W
    function wl(e) {
        delete e[ne], delete e[de], delete e[tt], delete e[Qe], delete e[qe]
    }
    function vt(e) {
        var t = e[ne]
        if (t) return t
        for (var l = e.parentNode; l; ) {
            if ((t = l[je] || l[ne])) {
                if (
                    ((l = t.alternate),
                    t.child !== null || (l !== null && l.child !== null))
                )
                    for (e = Mh(e); e !== null; ) {
                        if ((l = e[ne])) return l
                        e = Mh(e)
                    }
                return t
            }
            ;(e = l), (l = e.parentNode)
        }
        return null
    }
    function pt(e) {
        if ((e = e[ne] || e[je])) {
            var t = e.tag
            if (
                t === 5 ||
                t === 6 ||
                t === 13 ||
                t === 26 ||
                t === 27 ||
                t === 3
            )
                return e
        }
        return null
    }
    function Ml(e) {
        var t = e.tag
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
        throw Error(o(33))
    }
    function Zt(e) {
        var t = e[We]
        return (
            t ||
                (t = e[We] =
                    {
                        hoistableStyles: new Map(),
                        hoistableScripts: new Map(),
                    }),
            t
        )
    }
    function Ge(e) {
        e[Qt] = !0
    }
    var Oa = new Set(),
        Da = {}
    function Me(e, t) {
        Ke(e, t), Ke(e + 'Capture', t)
    }
    function Ke(e, t) {
        for (Da[e] = t, e = 0; e < t.length; e++) Oa.add(t[e])
    }
    var Ct = !(
            typeof window > 'u' ||
            typeof window.document > 'u' ||
            typeof window.document.createElement > 'u'
        ),
        wa = RegExp(
            '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
        ),
        ke = {},
        Cl = {}
    function ri(e) {
        return Vn.call(Cl, e)
            ? !0
            : Vn.call(ke, e)
              ? !1
              : wa.test(e)
                ? (Cl[e] = !0)
                : ((ke[e] = !0), !1)
    }
    function un(e, t, l) {
        if (ri(t))
            if (l === null) e.removeAttribute(t)
            else {
                switch (typeof l) {
                    case 'undefined':
                    case 'function':
                    case 'symbol':
                        e.removeAttribute(t)
                        return
                    case 'boolean':
                        var a = t.toLowerCase().slice(0, 5)
                        if (a !== 'data-' && a !== 'aria-') {
                            e.removeAttribute(t)
                            return
                        }
                }
                e.setAttribute(t, '' + l)
            }
    }
    function ci(e, t, l) {
        if (l === null) e.removeAttribute(t)
        else {
            switch (typeof l) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    e.removeAttribute(t)
                    return
            }
            e.setAttribute(t, '' + l)
        }
    }
    function _l(e, t, l, a) {
        if (a === null) e.removeAttribute(l)
        else {
            switch (typeof a) {
                case 'undefined':
                case 'function':
                case 'symbol':
                case 'boolean':
                    e.removeAttribute(l)
                    return
            }
            e.setAttributeNS(t, l, '' + a)
        }
    }
    function Kt(e) {
        switch (typeof e) {
            case 'bigint':
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
                return e
            case 'object':
                return e
            default:
                return ''
        }
    }
    function Ds(e) {
        var t = e.type
        return (
            (e = e.nodeName) &&
            e.toLowerCase() === 'input' &&
            (t === 'checkbox' || t === 'radio')
        )
    }
    function My(e) {
        var t = Ds(e) ? 'checked' : 'value',
            l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            a = '' + e[t]
        if (
            !e.hasOwnProperty(t) &&
            typeof l < 'u' &&
            typeof l.get == 'function' &&
            typeof l.set == 'function'
        ) {
            var u = l.get,
                r = l.set
            return (
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return u.call(this)
                    },
                    set: function (d) {
                        ;(a = '' + d), r.call(this, d)
                    },
                }),
                Object.defineProperty(e, t, { enumerable: l.enumerable }),
                {
                    getValue: function () {
                        return a
                    },
                    setValue: function (d) {
                        a = '' + d
                    },
                    stopTracking: function () {
                        ;(e._valueTracker = null), delete e[t]
                    },
                }
            )
        }
    }
    function oi(e) {
        e._valueTracker || (e._valueTracker = My(e))
    }
    function ws(e) {
        if (!e) return !1
        var t = e._valueTracker
        if (!t) return !0
        var l = t.getValue(),
            a = ''
        return (
            e && (a = Ds(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = a),
            e !== l ? (t.setValue(e), !0) : !1
        )
    }
    function si(e) {
        if (
            ((e = e || (typeof document < 'u' ? document : void 0)),
            typeof e > 'u')
        )
            return null
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Cy = /[\n"\\]/g
    function kt(e) {
        return e.replace(Cy, function (t) {
            return '\\' + t.charCodeAt(0).toString(16) + ' '
        })
    }
    function Yr(e, t, l, a, u, r, d, y) {
        ;(e.name = ''),
            d != null &&
            typeof d != 'function' &&
            typeof d != 'symbol' &&
            typeof d != 'boolean'
                ? (e.type = d)
                : e.removeAttribute('type'),
            t != null
                ? d === 'number'
                    ? ((t === 0 && e.value === '') || e.value != t) &&
                      (e.value = '' + Kt(t))
                    : e.value !== '' + Kt(t) && (e.value = '' + Kt(t))
                : (d !== 'submit' && d !== 'reset') ||
                  e.removeAttribute('value'),
            t != null
                ? Gr(e, d, Kt(t))
                : l != null
                  ? Gr(e, d, Kt(l))
                  : a != null && e.removeAttribute('value'),
            u == null && r != null && (e.defaultChecked = !!r),
            u != null &&
                (e.checked =
                    u && typeof u != 'function' && typeof u != 'symbol'),
            y != null &&
            typeof y != 'function' &&
            typeof y != 'symbol' &&
            typeof y != 'boolean'
                ? (e.name = '' + Kt(y))
                : e.removeAttribute('name')
    }
    function Ms(e, t, l, a, u, r, d, y) {
        if (
            (r != null &&
                typeof r != 'function' &&
                typeof r != 'symbol' &&
                typeof r != 'boolean' &&
                (e.type = r),
            t != null || l != null)
        ) {
            if (!((r !== 'submit' && r !== 'reset') || t != null)) return
            ;(l = l != null ? '' + Kt(l) : ''),
                (t = t != null ? '' + Kt(t) : l),
                y || t === e.value || (e.value = t),
                (e.defaultValue = t)
        }
        ;(a = a ?? u),
            (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
            (e.checked = y ? e.checked : !!a),
            (e.defaultChecked = !!a),
            d != null &&
                typeof d != 'function' &&
                typeof d != 'symbol' &&
                typeof d != 'boolean' &&
                (e.name = d)
    }
    function Gr(e, t, l) {
        ;(t === 'number' && si(e.ownerDocument) === e) ||
            e.defaultValue === '' + l ||
            (e.defaultValue = '' + l)
    }
    function rn(e, t, l, a) {
        if (((e = e.options), t)) {
            t = {}
            for (var u = 0; u < l.length; u++) t['$' + l[u]] = !0
            for (l = 0; l < e.length; l++)
                (u = t.hasOwnProperty('$' + e[l].value)),
                    e[l].selected !== u && (e[l].selected = u),
                    u && a && (e[l].defaultSelected = !0)
        } else {
            for (l = '' + Kt(l), t = null, u = 0; u < e.length; u++) {
                if (e[u].value === l) {
                    ;(e[u].selected = !0), a && (e[u].defaultSelected = !0)
                    return
                }
                t !== null || e[u].disabled || (t = e[u])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Cs(e, t, l) {
        if (
            t != null &&
            ((t = '' + Kt(t)), t !== e.value && (e.value = t), l == null)
        ) {
            e.defaultValue !== t && (e.defaultValue = t)
            return
        }
        e.defaultValue = l != null ? '' + Kt(l) : ''
    }
    function _s(e, t, l, a) {
        if (t == null) {
            if (a != null) {
                if (l != null) throw Error(o(92))
                if (le(a)) {
                    if (1 < a.length) throw Error(o(93))
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ''), (t = l)
        }
        ;(l = Kt(t)),
            (e.defaultValue = l),
            (a = e.textContent),
            a === l && a !== '' && a !== null && (e.value = a)
    }
    function cn(e, t) {
        if (t) {
            var l = e.firstChild
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t
                return
            }
        }
        e.textContent = t
    }
    var _y = new Set(
        'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
            ' ',
        ),
    )
    function Us(e, t, l) {
        var a = t.indexOf('--') === 0
        l == null || typeof l == 'boolean' || l === ''
            ? a
                ? e.setProperty(t, '')
                : t === 'float'
                  ? (e.cssFloat = '')
                  : (e[t] = '')
            : a
              ? e.setProperty(t, l)
              : typeof l != 'number' || l === 0 || _y.has(t)
                ? t === 'float'
                    ? (e.cssFloat = l)
                    : (e[t] = ('' + l).trim())
                : (e[t] = l + 'px')
    }
    function zs(e, t, l) {
        if (t != null && typeof t != 'object') throw Error(o(62))
        if (((e = e.style), l != null)) {
            for (var a in l)
                !l.hasOwnProperty(a) ||
                    (t != null && t.hasOwnProperty(a)) ||
                    (a.indexOf('--') === 0
                        ? e.setProperty(a, '')
                        : a === 'float'
                          ? (e.cssFloat = '')
                          : (e[a] = ''))
            for (var u in t)
                (a = t[u]), t.hasOwnProperty(u) && l[u] !== a && Us(e, u, a)
        } else for (var r in t) t.hasOwnProperty(r) && Us(e, r, t[r])
    }
    function Xr(e) {
        if (e.indexOf('-') === -1) return !1
        switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
                return !1
            default:
                return !0
        }
    }
    var Uy = new Map([
            ['acceptCharset', 'accept-charset'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
            ['crossOrigin', 'crossorigin'],
            ['accentHeight', 'accent-height'],
            ['alignmentBaseline', 'alignment-baseline'],
            ['arabicForm', 'arabic-form'],
            ['baselineShift', 'baseline-shift'],
            ['capHeight', 'cap-height'],
            ['clipPath', 'clip-path'],
            ['clipRule', 'clip-rule'],
            ['colorInterpolation', 'color-interpolation'],
            ['colorInterpolationFilters', 'color-interpolation-filters'],
            ['colorProfile', 'color-profile'],
            ['colorRendering', 'color-rendering'],
            ['dominantBaseline', 'dominant-baseline'],
            ['enableBackground', 'enable-background'],
            ['fillOpacity', 'fill-opacity'],
            ['fillRule', 'fill-rule'],
            ['floodColor', 'flood-color'],
            ['floodOpacity', 'flood-opacity'],
            ['fontFamily', 'font-family'],
            ['fontSize', 'font-size'],
            ['fontSizeAdjust', 'font-size-adjust'],
            ['fontStretch', 'font-stretch'],
            ['fontStyle', 'font-style'],
            ['fontVariant', 'font-variant'],
            ['fontWeight', 'font-weight'],
            ['glyphName', 'glyph-name'],
            ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
            ['glyphOrientationVertical', 'glyph-orientation-vertical'],
            ['horizAdvX', 'horiz-adv-x'],
            ['horizOriginX', 'horiz-origin-x'],
            ['imageRendering', 'image-rendering'],
            ['letterSpacing', 'letter-spacing'],
            ['lightingColor', 'lighting-color'],
            ['markerEnd', 'marker-end'],
            ['markerMid', 'marker-mid'],
            ['markerStart', 'marker-start'],
            ['overlinePosition', 'overline-position'],
            ['overlineThickness', 'overline-thickness'],
            ['paintOrder', 'paint-order'],
            ['panose-1', 'panose-1'],
            ['pointerEvents', 'pointer-events'],
            ['renderingIntent', 'rendering-intent'],
            ['shapeRendering', 'shape-rendering'],
            ['stopColor', 'stop-color'],
            ['stopOpacity', 'stop-opacity'],
            ['strikethroughPosition', 'strikethrough-position'],
            ['strikethroughThickness', 'strikethrough-thickness'],
            ['strokeDasharray', 'stroke-dasharray'],
            ['strokeDashoffset', 'stroke-dashoffset'],
            ['strokeLinecap', 'stroke-linecap'],
            ['strokeLinejoin', 'stroke-linejoin'],
            ['strokeMiterlimit', 'stroke-miterlimit'],
            ['strokeOpacity', 'stroke-opacity'],
            ['strokeWidth', 'stroke-width'],
            ['textAnchor', 'text-anchor'],
            ['textDecoration', 'text-decoration'],
            ['textRendering', 'text-rendering'],
            ['transformOrigin', 'transform-origin'],
            ['underlinePosition', 'underline-position'],
            ['underlineThickness', 'underline-thickness'],
            ['unicodeBidi', 'unicode-bidi'],
            ['unicodeRange', 'unicode-range'],
            ['unitsPerEm', 'units-per-em'],
            ['vAlphabetic', 'v-alphabetic'],
            ['vHanging', 'v-hanging'],
            ['vIdeographic', 'v-ideographic'],
            ['vMathematical', 'v-mathematical'],
            ['vectorEffect', 'vector-effect'],
            ['vertAdvY', 'vert-adv-y'],
            ['vertOriginX', 'vert-origin-x'],
            ['vertOriginY', 'vert-origin-y'],
            ['wordSpacing', 'word-spacing'],
            ['writingMode', 'writing-mode'],
            ['xmlnsXlink', 'xmlns:xlink'],
            ['xHeight', 'x-height'],
        ]),
        zy =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
    function fi(e) {
        return zy.test('' + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e
    }
    var Vr = null
    function Qr(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        )
    }
    var on = null,
        sn = null
    function Ns(e) {
        var t = pt(e)
        if (t && (e = t.stateNode)) {
            var l = e[de] || null
            e: switch (((e = t.stateNode), t.type)) {
                case 'input':
                    if (
                        (Yr(
                            e,
                            l.value,
                            l.defaultValue,
                            l.defaultValue,
                            l.checked,
                            l.defaultChecked,
                            l.type,
                            l.name,
                        ),
                        (t = l.name),
                        l.type === 'radio' && t != null)
                    ) {
                        for (l = e; l.parentNode; ) l = l.parentNode
                        for (
                            l = l.querySelectorAll(
                                'input[name="' +
                                    kt('' + t) +
                                    '"][type="radio"]',
                            ),
                                t = 0;
                            t < l.length;
                            t++
                        ) {
                            var a = l[t]
                            if (a !== e && a.form === e.form) {
                                var u = a[de] || null
                                if (!u) throw Error(o(90))
                                Yr(
                                    a,
                                    u.value,
                                    u.defaultValue,
                                    u.defaultValue,
                                    u.checked,
                                    u.defaultChecked,
                                    u.type,
                                    u.name,
                                )
                            }
                        }
                        for (t = 0; t < l.length; t++)
                            (a = l[t]), a.form === e.form && ws(a)
                    }
                    break e
                case 'textarea':
                    Cs(e, l.value, l.defaultValue)
                    break e
                case 'select':
                    ;(t = l.value), t != null && rn(e, !!l.multiple, t, !1)
            }
        }
    }
    var Zr = !1
    function js(e, t, l) {
        if (Zr) return e(t, l)
        Zr = !0
        try {
            var a = e(t)
            return a
        } finally {
            if (
                ((Zr = !1),
                (on !== null || sn !== null) &&
                    (Ji(),
                    on && ((t = on), (e = sn), (sn = on = null), Ns(t), e)))
            )
                for (t = 0; t < e.length; t++) Ns(e[t])
        }
    }
    function Fn(e, t) {
        var l = e.stateNode
        if (l === null) return null
        var a = l[de] || null
        if (a === null) return null
        l = a[t]
        e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
                ;(a = !a.disabled) ||
                    ((e = e.type),
                    (a = !(
                        e === 'button' ||
                        e === 'input' ||
                        e === 'select' ||
                        e === 'textarea'
                    ))),
                    (e = !a)
                break e
            default:
                e = !1
        }
        if (e) return null
        if (l && typeof l != 'function') throw Error(o(231, t, typeof l))
        return l
    }
    var Kr = !1
    if (Ct)
        try {
            var $n = {}
            Object.defineProperty($n, 'passive', {
                get: function () {
                    Kr = !0
                },
            }),
                window.addEventListener('test', $n, $n),
                window.removeEventListener('test', $n, $n)
        } catch {
            Kr = !1
        }
    var Pl = null,
        kr = null,
        di = null
    function Ls() {
        if (di) return di
        var e,
            t = kr,
            l = t.length,
            a,
            u = 'value' in Pl ? Pl.value : Pl.textContent,
            r = u.length
        for (e = 0; e < l && t[e] === u[e]; e++);
        var d = l - e
        for (a = 1; a <= d && t[l - a] === u[r - a]; a++);
        return (di = u.slice(e, 1 < a ? 1 - a : void 0))
    }
    function hi(e) {
        var t = e.keyCode
        return (
            'charCode' in e
                ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
                : (e = t),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        )
    }
    function mi() {
        return !0
    }
    function Hs() {
        return !1
    }
    function _t(e) {
        function t(l, a, u, r, d) {
            ;(this._reactName = l),
                (this._targetInst = u),
                (this.type = a),
                (this.nativeEvent = r),
                (this.target = d),
                (this.currentTarget = null)
            for (var y in e)
                e.hasOwnProperty(y) && ((l = e[y]), (this[y] = l ? l(r) : r[y]))
            return (
                (this.isDefaultPrevented = (
                    r.defaultPrevented != null
                        ? r.defaultPrevented
                        : r.returnValue === !1
                )
                    ? mi
                    : Hs),
                (this.isPropagationStopped = Hs),
                this
            )
        }
        return (
            fe(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0
                    var l = this.nativeEvent
                    l &&
                        (l.preventDefault
                            ? l.preventDefault()
                            : typeof l.returnValue != 'unknown' &&
                              (l.returnValue = !1),
                        (this.isDefaultPrevented = mi))
                },
                stopPropagation: function () {
                    var l = this.nativeEvent
                    l &&
                        (l.stopPropagation
                            ? l.stopPropagation()
                            : typeof l.cancelBubble != 'unknown' &&
                              (l.cancelBubble = !0),
                        (this.isPropagationStopped = mi))
                },
                persist: function () {},
                isPersistent: mi,
            }),
            t
        )
    }
    var Ma = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        yi = _t(Ma),
        Wn = fe({}, Ma, { view: 0, detail: 0 }),
        Ny = _t(Wn),
        Jr,
        Fr,
        Pn,
        vi = fe({}, Wn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Wr,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0
                    ? e.fromElement === e.srcElement
                        ? e.toElement
                        : e.fromElement
                    : e.relatedTarget
            },
            movementX: function (e) {
                return 'movementX' in e
                    ? e.movementX
                    : (e !== Pn &&
                          (Pn && e.type === 'mousemove'
                              ? ((Jr = e.screenX - Pn.screenX),
                                (Fr = e.screenY - Pn.screenY))
                              : (Fr = Jr = 0),
                          (Pn = e)),
                      Jr)
            },
            movementY: function (e) {
                return 'movementY' in e ? e.movementY : Fr
            },
        }),
        Bs = _t(vi),
        jy = fe({}, vi, { dataTransfer: 0 }),
        Ly = _t(jy),
        Hy = fe({}, Wn, { relatedTarget: 0 }),
        $r = _t(Hy),
        By = fe({}, Ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        qy = _t(By),
        Yy = fe({}, Ma, {
            clipboardData: function (e) {
                return 'clipboardData' in e
                    ? e.clipboardData
                    : window.clipboardData
            },
        }),
        Gy = _t(Yy),
        Xy = fe({}, Ma, { data: 0 }),
        qs = _t(Xy),
        Vy = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
        },
        Qy = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
        },
        Zy = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
        }
    function Ky(e) {
        var t = this.nativeEvent
        return t.getModifierState
            ? t.getModifierState(e)
            : (e = Zy[e])
              ? !!t[e]
              : !1
    }
    function Wr() {
        return Ky
    }
    var ky = fe({}, Wn, {
            key: function (e) {
                if (e.key) {
                    var t = Vy[e.key] || e.key
                    if (t !== 'Unidentified') return t
                }
                return e.type === 'keypress'
                    ? ((e = hi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                    : e.type === 'keydown' || e.type === 'keyup'
                      ? Qy[e.keyCode] || 'Unidentified'
                      : ''
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Wr,
            charCode: function (e) {
                return e.type === 'keypress' ? hi(e) : 0
            },
            keyCode: function (e) {
                return e.type === 'keydown' || e.type === 'keyup'
                    ? e.keyCode
                    : 0
            },
            which: function (e) {
                return e.type === 'keypress'
                    ? hi(e)
                    : e.type === 'keydown' || e.type === 'keyup'
                      ? e.keyCode
                      : 0
            },
        }),
        Jy = _t(ky),
        Fy = fe({}, vi, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        Ys = _t(Fy),
        $y = fe({}, Wn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Wr,
        }),
        Wy = _t($y),
        Py = fe({}, Ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Iy = _t(Py),
        e0 = fe({}, vi, {
            deltaX: function (e) {
                return 'deltaX' in e
                    ? e.deltaX
                    : 'wheelDeltaX' in e
                      ? -e.wheelDeltaX
                      : 0
            },
            deltaY: function (e) {
                return 'deltaY' in e
                    ? e.deltaY
                    : 'wheelDeltaY' in e
                      ? -e.wheelDeltaY
                      : 'wheelDelta' in e
                        ? -e.wheelDelta
                        : 0
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        t0 = _t(e0),
        l0 = fe({}, Ma, { newState: 0, oldState: 0 }),
        a0 = _t(l0),
        n0 = [9, 13, 27, 32],
        Pr = Ct && 'CompositionEvent' in window,
        In = null
    Ct && 'documentMode' in document && (In = document.documentMode)
    var u0 = Ct && 'TextEvent' in window && !In,
        Gs = Ct && (!Pr || (In && 8 < In && 11 >= In)),
        Xs = ' ',
        Vs = !1
    function Qs(e, t) {
        switch (e) {
            case 'keyup':
                return n0.indexOf(t.keyCode) !== -1
            case 'keydown':
                return t.keyCode !== 229
            case 'keypress':
            case 'mousedown':
            case 'focusout':
                return !0
            default:
                return !1
        }
    }
    function Zs(e) {
        return (
            (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
        )
    }
    var fn = !1
    function i0(e, t) {
        switch (e) {
            case 'compositionend':
                return Zs(t)
            case 'keypress':
                return t.which !== 32 ? null : ((Vs = !0), Xs)
            case 'textInput':
                return (e = t.data), e === Xs && Vs ? null : e
            default:
                return null
        }
    }
    function r0(e, t) {
        if (fn)
            return e === 'compositionend' || (!Pr && Qs(e, t))
                ? ((e = Ls()), (di = kr = Pl = null), (fn = !1), e)
                : null
        switch (e) {
            case 'paste':
                return null
            case 'keypress':
                if (
                    !(t.ctrlKey || t.altKey || t.metaKey) ||
                    (t.ctrlKey && t.altKey)
                ) {
                    if (t.char && 1 < t.char.length) return t.char
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null
            case 'compositionend':
                return Gs && t.locale !== 'ko' ? null : t.data
            default:
                return null
        }
    }
    var c0 = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    }
    function Ks(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase()
        return t === 'input' ? !!c0[e.type] : t === 'textarea'
    }
    function ks(e, t, l, a) {
        on ? (sn ? sn.push(a) : (sn = [a])) : (on = a),
            (t = Ii(t, 'onChange')),
            0 < t.length &&
                ((l = new yi('onChange', 'change', null, l, a)),
                e.push({ event: l, listeners: t }))
    }
    var eu = null,
        tu = null
    function o0(e) {
        Sh(e, 0)
    }
    function pi(e) {
        var t = Ml(e)
        if (ws(t)) return e
    }
    function Js(e, t) {
        if (e === 'change') return t
    }
    var Fs = !1
    if (Ct) {
        var Ir
        if (Ct) {
            var ec = 'oninput' in document
            if (!ec) {
                var $s = document.createElement('div')
                $s.setAttribute('oninput', 'return;'),
                    (ec = typeof $s.oninput == 'function')
            }
            Ir = ec
        } else Ir = !1
        Fs = Ir && (!document.documentMode || 9 < document.documentMode)
    }
    function Ws() {
        eu && (eu.detachEvent('onpropertychange', Ps), (tu = eu = null))
    }
    function Ps(e) {
        if (e.propertyName === 'value' && pi(tu)) {
            var t = []
            ks(t, tu, e, Qr(e)), js(o0, t)
        }
    }
    function s0(e, t, l) {
        e === 'focusin'
            ? (Ws(), (eu = t), (tu = l), eu.attachEvent('onpropertychange', Ps))
            : e === 'focusout' && Ws()
    }
    function f0(e) {
        if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
            return pi(tu)
    }
    function d0(e, t) {
        if (e === 'click') return pi(t)
    }
    function h0(e, t) {
        if (e === 'input' || e === 'change') return pi(t)
    }
    function m0(e, t) {
        return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
    }
    var jt = typeof Object.is == 'function' ? Object.is : m0
    function lu(e, t) {
        if (jt(e, t)) return !0
        if (
            typeof e != 'object' ||
            e === null ||
            typeof t != 'object' ||
            t === null
        )
            return !1
        var l = Object.keys(e),
            a = Object.keys(t)
        if (l.length !== a.length) return !1
        for (a = 0; a < l.length; a++) {
            var u = l[a]
            if (!Vn.call(t, u) || !jt(e[u], t[u])) return !1
        }
        return !0
    }
    function Is(e) {
        for (; e && e.firstChild; ) e = e.firstChild
        return e
    }
    function ef(e, t) {
        var l = Is(e)
        e = 0
        for (var a; l; ) {
            if (l.nodeType === 3) {
                if (((a = e + l.textContent.length), e <= t && a >= t))
                    return { node: l, offset: t - e }
                e = a
            }
            e: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling
                        break e
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = Is(l)
        }
    }
    function tf(e, t) {
        return e && t
            ? e === t
                ? !0
                : e && e.nodeType === 3
                  ? !1
                  : t && t.nodeType === 3
                    ? tf(e, t.parentNode)
                    : 'contains' in e
                      ? e.contains(t)
                      : e.compareDocumentPosition
                        ? !!(e.compareDocumentPosition(t) & 16)
                        : !1
            : !1
    }
    function lf(e) {
        e =
            e != null &&
            e.ownerDocument != null &&
            e.ownerDocument.defaultView != null
                ? e.ownerDocument.defaultView
                : window
        for (var t = si(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var l = typeof t.contentWindow.location.href == 'string'
            } catch {
                l = !1
            }
            if (l) e = t.contentWindow
            else break
            t = si(e.document)
        }
        return t
    }
    function tc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase()
        return (
            t &&
            ((t === 'input' &&
                (e.type === 'text' ||
                    e.type === 'search' ||
                    e.type === 'tel' ||
                    e.type === 'url' ||
                    e.type === 'password')) ||
                t === 'textarea' ||
                e.contentEditable === 'true')
        )
    }
    function y0(e, t) {
        var l = lf(t)
        t = e.focusedElem
        var a = e.selectionRange
        if (
            l !== t &&
            t &&
            t.ownerDocument &&
            tf(t.ownerDocument.documentElement, t)
        ) {
            if (a !== null && tc(t)) {
                if (
                    ((e = a.start),
                    (l = a.end),
                    l === void 0 && (l = e),
                    'selectionStart' in t)
                )
                    (t.selectionStart = e),
                        (t.selectionEnd = Math.min(l, t.value.length))
                else if (
                    ((l =
                        ((e = t.ownerDocument || document) && e.defaultView) ||
                        window),
                    l.getSelection)
                ) {
                    l = l.getSelection()
                    var u = t.textContent.length,
                        r = Math.min(a.start, u)
                    ;(a = a.end === void 0 ? r : Math.min(a.end, u)),
                        !l.extend && r > a && ((u = a), (a = r), (r = u)),
                        (u = ef(t, r))
                    var d = ef(t, a)
                    u &&
                        d &&
                        (l.rangeCount !== 1 ||
                            l.anchorNode !== u.node ||
                            l.anchorOffset !== u.offset ||
                            l.focusNode !== d.node ||
                            l.focusOffset !== d.offset) &&
                        ((e = e.createRange()),
                        e.setStart(u.node, u.offset),
                        l.removeAllRanges(),
                        r > a
                            ? (l.addRange(e), l.extend(d.node, d.offset))
                            : (e.setEnd(d.node, d.offset), l.addRange(e)))
                }
            }
            for (e = [], l = t; (l = l.parentNode); )
                l.nodeType === 1 &&
                    e.push({ element: l, left: l.scrollLeft, top: l.scrollTop })
            for (
                typeof t.focus == 'function' && t.focus(), t = 0;
                t < e.length;
                t++
            )
                (l = e[t]),
                    (l.element.scrollLeft = l.left),
                    (l.element.scrollTop = l.top)
        }
    }
    var v0 = Ct && 'documentMode' in document && 11 >= document.documentMode,
        dn = null,
        lc = null,
        au = null,
        ac = !1
    function af(e, t, l) {
        var a =
            l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument
        ac ||
            dn == null ||
            dn !== si(a) ||
            ((a = dn),
            'selectionStart' in a && tc(a)
                ? (a = { start: a.selectionStart, end: a.selectionEnd })
                : ((a = (
                      (a.ownerDocument && a.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (a = {
                      anchorNode: a.anchorNode,
                      anchorOffset: a.anchorOffset,
                      focusNode: a.focusNode,
                      focusOffset: a.focusOffset,
                  })),
            (au && lu(au, a)) ||
                ((au = a),
                (a = Ii(lc, 'onSelect')),
                0 < a.length &&
                    ((t = new yi('onSelect', 'select', null, t, l)),
                    e.push({ event: t, listeners: a }),
                    (t.target = dn))))
    }
    function Ca(e, t) {
        var l = {}
        return (
            (l[e.toLowerCase()] = t.toLowerCase()),
            (l['Webkit' + e] = 'webkit' + t),
            (l['Moz' + e] = 'moz' + t),
            l
        )
    }
    var hn = {
            animationend: Ca('Animation', 'AnimationEnd'),
            animationiteration: Ca('Animation', 'AnimationIteration'),
            animationstart: Ca('Animation', 'AnimationStart'),
            transitionrun: Ca('Transition', 'TransitionRun'),
            transitionstart: Ca('Transition', 'TransitionStart'),
            transitioncancel: Ca('Transition', 'TransitionCancel'),
            transitionend: Ca('Transition', 'TransitionEnd'),
        },
        nc = {},
        nf = {}
    Ct &&
        ((nf = document.createElement('div').style),
        'AnimationEvent' in window ||
            (delete hn.animationend.animation,
            delete hn.animationiteration.animation,
            delete hn.animationstart.animation),
        'TransitionEvent' in window || delete hn.transitionend.transition)
    function _a(e) {
        if (nc[e]) return nc[e]
        if (!hn[e]) return e
        var t = hn[e],
            l
        for (l in t) if (t.hasOwnProperty(l) && l in nf) return (nc[e] = t[l])
        return e
    }
    var uf = _a('animationend'),
        rf = _a('animationiteration'),
        cf = _a('animationstart'),
        p0 = _a('transitionrun'),
        g0 = _a('transitionstart'),
        b0 = _a('transitioncancel'),
        of = _a('transitionend'),
        sf = new Map(),
        ff =
            'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
                ' ',
            )
    function rl(e, t) {
        sf.set(e, t), Me(t, [e])
    }
    var Jt = [],
        mn = 0,
        uc = 0
    function gi() {
        for (var e = mn, t = (uc = mn = 0); t < e; ) {
            var l = Jt[t]
            Jt[t++] = null
            var a = Jt[t]
            Jt[t++] = null
            var u = Jt[t]
            Jt[t++] = null
            var r = Jt[t]
            if (((Jt[t++] = null), a !== null && u !== null)) {
                var d = a.pending
                d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)),
                    (a.pending = u)
            }
            r !== 0 && df(l, u, r)
        }
    }
    function bi(e, t, l, a) {
        ;(Jt[mn++] = e),
            (Jt[mn++] = t),
            (Jt[mn++] = l),
            (Jt[mn++] = a),
            (uc |= a),
            (e.lanes |= a),
            (e = e.alternate),
            e !== null && (e.lanes |= a)
    }
    function ic(e, t, l, a) {
        return bi(e, t, l, a), Si(e)
    }
    function Il(e, t) {
        return bi(e, null, null, t), Si(e)
    }
    function df(e, t, l) {
        e.lanes |= l
        var a = e.alternate
        a !== null && (a.lanes |= l)
        for (var u = !1, r = e.return; r !== null; )
            (r.childLanes |= l),
                (a = r.alternate),
                a !== null && (a.childLanes |= l),
                r.tag === 22 &&
                    ((e = r.stateNode),
                    e === null || e._visibility & 1 || (u = !0)),
                (e = r),
                (r = r.return)
        u &&
            t !== null &&
            e.tag === 3 &&
            ((r = e.stateNode),
            (u = 31 - ot(l)),
            (r = r.hiddenUpdates),
            (e = r[u]),
            e === null ? (r[u] = [t]) : e.push(t),
            (t.lane = l | 536870912))
    }
    function Si(e) {
        if (50 < wu) throw ((wu = 0), (ho = null), Error(o(185)))
        for (var t = e.return; t !== null; ) (e = t), (t = e.return)
        return e.tag === 3 ? e.stateNode : null
    }
    var yn = {},
        hf = new WeakMap()
    function Ft(e, t) {
        if (typeof e == 'object' && e !== null) {
            var l = hf.get(e)
            return l !== void 0
                ? l
                : ((t = { value: e, source: t, stack: ve(t) }), hf.set(e, t), t)
        }
        return { value: e, source: t, stack: ve(t) }
    }
    var vn = [],
        pn = 0,
        Ei = null,
        Ri = 0,
        $t = [],
        Wt = 0,
        Ua = null,
        Ul = 1,
        zl = ''
    function za(e, t) {
        ;(vn[pn++] = Ri), (vn[pn++] = Ei), (Ei = e), (Ri = t)
    }
    function mf(e, t, l) {
        ;($t[Wt++] = Ul), ($t[Wt++] = zl), ($t[Wt++] = Ua), (Ua = e)
        var a = Ul
        e = zl
        var u = 32 - ot(a) - 1
        ;(a &= ~(1 << u)), (l += 1)
        var r = 32 - ot(t) + u
        if (30 < r) {
            var d = u - (u % 5)
            ;(r = (a & ((1 << d) - 1)).toString(32)),
                (a >>= d),
                (u -= d),
                (Ul = (1 << (32 - ot(t) + u)) | (l << u) | a),
                (zl = r + e)
        } else (Ul = (1 << r) | (l << u) | a), (zl = e)
    }
    function rc(e) {
        e.return !== null && (za(e, 1), mf(e, 1, 0))
    }
    function cc(e) {
        for (; e === Ei; )
            (Ei = vn[--pn]), (vn[pn] = null), (Ri = vn[--pn]), (vn[pn] = null)
        for (; e === Ua; )
            (Ua = $t[--Wt]),
                ($t[Wt] = null),
                (zl = $t[--Wt]),
                ($t[Wt] = null),
                (Ul = $t[--Wt]),
                ($t[Wt] = null)
    }
    var wt = null,
        gt = null,
        ze = !1,
        cl = null,
        gl = !1,
        oc = Error(o(519))
    function Na(e) {
        var t = Error(o(418, ''))
        throw (iu(Ft(t, e)), oc)
    }
    function yf(e) {
        var t = e.stateNode,
            l = e.type,
            a = e.memoizedProps
        switch (((t[ne] = e), (t[de] = a), l)) {
            case 'dialog':
                De('cancel', t), De('close', t)
                break
            case 'iframe':
            case 'object':
            case 'embed':
                De('load', t)
                break
            case 'video':
            case 'audio':
                for (l = 0; l < Cu.length; l++) De(Cu[l], t)
                break
            case 'source':
                De('error', t)
                break
            case 'img':
            case 'image':
            case 'link':
                De('error', t), De('load', t)
                break
            case 'details':
                De('toggle', t)
                break
            case 'input':
                De('invalid', t),
                    Ms(
                        t,
                        a.value,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name,
                        !0,
                    ),
                    oi(t)
                break
            case 'select':
                De('invalid', t)
                break
            case 'textarea':
                De('invalid', t),
                    _s(t, a.value, a.defaultValue, a.children),
                    oi(t)
        }
        ;(l = a.children),
            (typeof l != 'string' &&
                typeof l != 'number' &&
                typeof l != 'bigint') ||
            t.textContent === '' + l ||
            a.suppressHydrationWarning === !0 ||
            xh(t.textContent, l)
                ? (a.popover != null &&
                      (De('beforetoggle', t), De('toggle', t)),
                  a.onScroll != null && De('scroll', t),
                  a.onScrollEnd != null && De('scrollend', t),
                  a.onClick != null && (t.onclick = er),
                  (t = !0))
                : (t = !1),
            t || Na(e)
    }
    function vf(e) {
        for (wt = e.return; wt; )
            switch (wt.tag) {
                case 3:
                case 27:
                    gl = !0
                    return
                case 5:
                case 13:
                    gl = !1
                    return
                default:
                    wt = wt.return
            }
    }
    function nu(e) {
        if (e !== wt) return !1
        if (!ze) return vf(e), (ze = !0), !1
        var t = !1,
            l
        if (
            ((l = e.tag !== 3 && e.tag !== 27) &&
                ((l = e.tag === 5) &&
                    ((l = e.type),
                    (l =
                        !(l !== 'form' && l !== 'button') ||
                        Co(e.type, e.memoizedProps))),
                (l = !l)),
            l && (t = !0),
            t && gt && Na(e),
            vf(e),
            e.tag === 13)
        ) {
            if (
                ((e = e.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
            )
                throw Error(o(317))
            e: {
                for (e = e.nextSibling, t = 0; e; ) {
                    if (e.nodeType === 8)
                        if (((l = e.data), l === '/$')) {
                            if (t === 0) {
                                gt = sl(e.nextSibling)
                                break e
                            }
                            t--
                        } else (l !== '$' && l !== '$!' && l !== '$?') || t++
                    e = e.nextSibling
                }
                gt = null
            }
        } else gt = wt ? sl(e.stateNode.nextSibling) : null
        return !0
    }
    function uu() {
        ;(gt = wt = null), (ze = !1)
    }
    function iu(e) {
        cl === null ? (cl = [e]) : cl.push(e)
    }
    var ru = Error(o(460)),
        pf = Error(o(474)),
        sc = { then: function () {} }
    function gf(e) {
        return (e = e.status), e === 'fulfilled' || e === 'rejected'
    }
    function Ti() {}
    function bf(e, t, l) {
        switch (
            ((l = e[l]),
            l === void 0 ? e.push(t) : l !== t && (t.then(Ti, Ti), (t = l)),
            t.status)
        ) {
            case 'fulfilled':
                return t.value
            case 'rejected':
                throw ((e = t.reason), e === ru ? Error(o(483)) : e)
            default:
                if (typeof t.status == 'string') t.then(Ti, Ti)
                else {
                    if (((e = Xe), e !== null && 100 < e.shellSuspendCounter))
                        throw Error(o(482))
                    ;(e = t),
                        (e.status = 'pending'),
                        e.then(
                            function (a) {
                                if (t.status === 'pending') {
                                    var u = t
                                    ;(u.status = 'fulfilled'), (u.value = a)
                                }
                            },
                            function (a) {
                                if (t.status === 'pending') {
                                    var u = t
                                    ;(u.status = 'rejected'), (u.reason = a)
                                }
                            },
                        )
                }
                switch (t.status) {
                    case 'fulfilled':
                        return t.value
                    case 'rejected':
                        throw ((e = t.reason), e === ru ? Error(o(483)) : e)
                }
                throw ((cu = t), ru)
        }
    }
    var cu = null
    function Sf() {
        if (cu === null) throw Error(o(459))
        var e = cu
        return (cu = null), e
    }
    var gn = null,
        ou = 0
    function xi(e) {
        var t = ou
        return (ou += 1), gn === null && (gn = []), bf(gn, e, t)
    }
    function su(e, t) {
        ;(t = t.props.ref), (e.ref = t !== void 0 ? t : null)
    }
    function Ai(e, t) {
        throw t.$$typeof === f
            ? Error(o(525))
            : ((e = Object.prototype.toString.call(t)),
              Error(
                  o(
                      31,
                      e === '[object Object]'
                          ? 'object with keys {' +
                                Object.keys(t).join(', ') +
                                '}'
                          : e,
                  ),
              ))
    }
    function Ef(e) {
        var t = e._init
        return t(e._payload)
    }
    function Rf(e) {
        function t(w, R) {
            if (e) {
                var U = w.deletions
                U === null ? ((w.deletions = [R]), (w.flags |= 16)) : U.push(R)
            }
        }
        function l(w, R) {
            if (!e) return null
            for (; R !== null; ) t(w, R), (R = R.sibling)
            return null
        }
        function a(w) {
            for (var R = new Map(); w !== null; )
                w.key !== null ? R.set(w.key, w) : R.set(w.index, w),
                    (w = w.sibling)
            return R
        }
        function u(w, R) {
            return (w = fa(w, R)), (w.index = 0), (w.sibling = null), w
        }
        function r(w, R, U) {
            return (
                (w.index = U),
                e
                    ? ((U = w.alternate),
                      U !== null
                          ? ((U = U.index),
                            U < R ? ((w.flags |= 33554434), R) : U)
                          : ((w.flags |= 33554434), R))
                    : ((w.flags |= 1048576), R)
            )
        }
        function d(w) {
            return e && w.alternate === null && (w.flags |= 33554434), w
        }
        function y(w, R, U, X) {
            return R === null || R.tag !== 6
                ? ((R = no(U, w.mode, X)), (R.return = w), R)
                : ((R = u(R, U)), (R.return = w), R)
        }
        function b(w, R, U, X) {
            var te = U.type
            return te === p
                ? G(w, R, U.props.children, X, U.key)
                : R !== null &&
                    (R.elementType === te ||
                        (typeof te == 'object' &&
                            te !== null &&
                            te.$$typeof === V &&
                            Ef(te) === R.type))
                  ? ((R = u(R, U.props)), su(R, U), (R.return = w), R)
                  : ((R = Vi(U.type, U.key, U.props, null, w.mode, X)),
                    su(R, U),
                    (R.return = w),
                    R)
        }
        function T(w, R, U, X) {
            return R === null ||
                R.tag !== 4 ||
                R.stateNode.containerInfo !== U.containerInfo ||
                R.stateNode.implementation !== U.implementation
                ? ((R = uo(U, w.mode, X)), (R.return = w), R)
                : ((R = u(R, U.children || [])), (R.return = w), R)
        }
        function G(w, R, U, X, te) {
            return R === null || R.tag !== 7
                ? ((R = Qa(U, w.mode, X, te)), (R.return = w), R)
                : ((R = u(R, U)), (R.return = w), R)
        }
        function Q(w, R, U) {
            if (
                (typeof R == 'string' && R !== '') ||
                typeof R == 'number' ||
                typeof R == 'bigint'
            )
                return (R = no('' + R, w.mode, U)), (R.return = w), R
            if (typeof R == 'object' && R !== null) {
                switch (R.$$typeof) {
                    case h:
                        return (
                            (U = Vi(R.type, R.key, R.props, null, w.mode, U)),
                            su(U, R),
                            (U.return = w),
                            U
                        )
                    case v:
                        return (R = uo(R, w.mode, U)), (R.return = w), R
                    case V:
                        var X = R._init
                        return (R = X(R._payload)), Q(w, R, U)
                }
                if (le(R) || C(R))
                    return (R = Qa(R, w.mode, U, null)), (R.return = w), R
                if (typeof R.then == 'function') return Q(w, xi(R), U)
                if (R.$$typeof === D) return Q(w, Yi(w, R), U)
                Ai(w, R)
            }
            return null
        }
        function N(w, R, U, X) {
            var te = R !== null ? R.key : null
            if (
                (typeof U == 'string' && U !== '') ||
                typeof U == 'number' ||
                typeof U == 'bigint'
            )
                return te !== null ? null : y(w, R, '' + U, X)
            if (typeof U == 'object' && U !== null) {
                switch (U.$$typeof) {
                    case h:
                        return U.key === te ? b(w, R, U, X) : null
                    case v:
                        return U.key === te ? T(w, R, U, X) : null
                    case V:
                        return (
                            (te = U._init), (U = te(U._payload)), N(w, R, U, X)
                        )
                }
                if (le(U) || C(U))
                    return te !== null ? null : G(w, R, U, X, null)
                if (typeof U.then == 'function') return N(w, R, xi(U), X)
                if (U.$$typeof === D) return N(w, R, Yi(w, U), X)
                Ai(w, U)
            }
            return null
        }
        function B(w, R, U, X, te) {
            if (
                (typeof X == 'string' && X !== '') ||
                typeof X == 'number' ||
                typeof X == 'bigint'
            )
                return (w = w.get(U) || null), y(R, w, '' + X, te)
            if (typeof X == 'object' && X !== null) {
                switch (X.$$typeof) {
                    case h:
                        return (
                            (w = w.get(X.key === null ? U : X.key) || null),
                            b(R, w, X, te)
                        )
                    case v:
                        return (
                            (w = w.get(X.key === null ? U : X.key) || null),
                            T(R, w, X, te)
                        )
                    case V:
                        var Ae = X._init
                        return (X = Ae(X._payload)), B(w, R, U, X, te)
                }
                if (le(X) || C(X))
                    return (w = w.get(U) || null), G(R, w, X, te, null)
                if (typeof X.then == 'function') return B(w, R, U, xi(X), te)
                if (X.$$typeof === D) return B(w, R, U, Yi(R, X), te)
                Ai(R, X)
            }
            return null
        }
        function ue(w, R, U, X) {
            for (
                var te = null, Ae = null, re = R, me = (R = 0), dt = null;
                re !== null && me < U.length;
                me++
            ) {
                re.index > me ? ((dt = re), (re = null)) : (dt = re.sibling)
                var Ne = N(w, re, U[me], X)
                if (Ne === null) {
                    re === null && (re = dt)
                    break
                }
                e && re && Ne.alternate === null && t(w, re),
                    (R = r(Ne, R, me)),
                    Ae === null ? (te = Ne) : (Ae.sibling = Ne),
                    (Ae = Ne),
                    (re = dt)
            }
            if (me === U.length) return l(w, re), ze && za(w, me), te
            if (re === null) {
                for (; me < U.length; me++)
                    (re = Q(w, U[me], X)),
                        re !== null &&
                            ((R = r(re, R, me)),
                            Ae === null ? (te = re) : (Ae.sibling = re),
                            (Ae = re))
                return ze && za(w, me), te
            }
            for (re = a(re); me < U.length; me++)
                (dt = B(re, w, me, U[me], X)),
                    dt !== null &&
                        (e &&
                            dt.alternate !== null &&
                            re.delete(dt.key === null ? me : dt.key),
                        (R = r(dt, R, me)),
                        Ae === null ? (te = dt) : (Ae.sibling = dt),
                        (Ae = dt))
            return (
                e &&
                    re.forEach(function (ga) {
                        return t(w, ga)
                    }),
                ze && za(w, me),
                te
            )
        }
        function ge(w, R, U, X) {
            if (U == null) throw Error(o(151))
            for (
                var te = null,
                    Ae = null,
                    re = R,
                    me = (R = 0),
                    dt = null,
                    Ne = U.next();
                re !== null && !Ne.done;
                me++, Ne = U.next()
            ) {
                re.index > me ? ((dt = re), (re = null)) : (dt = re.sibling)
                var ga = N(w, re, Ne.value, X)
                if (ga === null) {
                    re === null && (re = dt)
                    break
                }
                e && re && ga.alternate === null && t(w, re),
                    (R = r(ga, R, me)),
                    Ae === null ? (te = ga) : (Ae.sibling = ga),
                    (Ae = ga),
                    (re = dt)
            }
            if (Ne.done) return l(w, re), ze && za(w, me), te
            if (re === null) {
                for (; !Ne.done; me++, Ne = U.next())
                    (Ne = Q(w, Ne.value, X)),
                        Ne !== null &&
                            ((R = r(Ne, R, me)),
                            Ae === null ? (te = Ne) : (Ae.sibling = Ne),
                            (Ae = Ne))
                return ze && za(w, me), te
            }
            for (re = a(re); !Ne.done; me++, Ne = U.next())
                (Ne = B(re, w, me, Ne.value, X)),
                    Ne !== null &&
                        (e &&
                            Ne.alternate !== null &&
                            re.delete(Ne.key === null ? me : Ne.key),
                        (R = r(Ne, R, me)),
                        Ae === null ? (te = Ne) : (Ae.sibling = Ne),
                        (Ae = Ne))
            return (
                e &&
                    re.forEach(function (zv) {
                        return t(w, zv)
                    }),
                ze && za(w, me),
                te
            )
        }
        function et(w, R, U, X) {
            if (
                (typeof U == 'object' &&
                    U !== null &&
                    U.type === p &&
                    U.key === null &&
                    (U = U.props.children),
                typeof U == 'object' && U !== null)
            ) {
                switch (U.$$typeof) {
                    case h:
                        e: {
                            for (var te = U.key; R !== null; ) {
                                if (R.key === te) {
                                    if (((te = U.type), te === p)) {
                                        if (R.tag === 7) {
                                            l(w, R.sibling),
                                                (X = u(R, U.props.children)),
                                                (X.return = w),
                                                (w = X)
                                            break e
                                        }
                                    } else if (
                                        R.elementType === te ||
                                        (typeof te == 'object' &&
                                            te !== null &&
                                            te.$$typeof === V &&
                                            Ef(te) === R.type)
                                    ) {
                                        l(w, R.sibling),
                                            (X = u(R, U.props)),
                                            su(X, U),
                                            (X.return = w),
                                            (w = X)
                                        break e
                                    }
                                    l(w, R)
                                    break
                                } else t(w, R)
                                R = R.sibling
                            }
                            U.type === p
                                ? ((X = Qa(U.props.children, w.mode, X, U.key)),
                                  (X.return = w),
                                  (w = X))
                                : ((X = Vi(
                                      U.type,
                                      U.key,
                                      U.props,
                                      null,
                                      w.mode,
                                      X,
                                  )),
                                  su(X, U),
                                  (X.return = w),
                                  (w = X))
                        }
                        return d(w)
                    case v:
                        e: {
                            for (te = U.key; R !== null; ) {
                                if (R.key === te)
                                    if (
                                        R.tag === 4 &&
                                        R.stateNode.containerInfo ===
                                            U.containerInfo &&
                                        R.stateNode.implementation ===
                                            U.implementation
                                    ) {
                                        l(w, R.sibling),
                                            (X = u(R, U.children || [])),
                                            (X.return = w),
                                            (w = X)
                                        break e
                                    } else {
                                        l(w, R)
                                        break
                                    }
                                else t(w, R)
                                R = R.sibling
                            }
                            ;(X = uo(U, w.mode, X)), (X.return = w), (w = X)
                        }
                        return d(w)
                    case V:
                        return (
                            (te = U._init), (U = te(U._payload)), et(w, R, U, X)
                        )
                }
                if (le(U)) return ue(w, R, U, X)
                if (C(U)) {
                    if (((te = C(U)), typeof te != 'function'))
                        throw Error(o(150))
                    return (U = te.call(U)), ge(w, R, U, X)
                }
                if (typeof U.then == 'function') return et(w, R, xi(U), X)
                if (U.$$typeof === D) return et(w, R, Yi(w, U), X)
                Ai(w, U)
            }
            return (typeof U == 'string' && U !== '') ||
                typeof U == 'number' ||
                typeof U == 'bigint'
                ? ((U = '' + U),
                  R !== null && R.tag === 6
                      ? (l(w, R.sibling),
                        (X = u(R, U)),
                        (X.return = w),
                        (w = X))
                      : (l(w, R),
                        (X = no(U, w.mode, X)),
                        (X.return = w),
                        (w = X)),
                  d(w))
                : l(w, R)
        }
        return function (w, R, U, X) {
            try {
                ou = 0
                var te = et(w, R, U, X)
                return (gn = null), te
            } catch (re) {
                if (re === ru) throw re
                var Ae = tl(29, re, null, w.mode)
                return (Ae.lanes = X), (Ae.return = w), Ae
            } finally {
            }
        }
    }
    var ja = Rf(!0),
        Tf = Rf(!1),
        bn = Ue(null),
        Oi = Ue(0)
    function xf(e, t) {
        ;(e = Ql), Re(Oi, e), Re(bn, t), (Ql = e | t.baseLanes)
    }
    function fc() {
        Re(Oi, Ql), Re(bn, bn.current)
    }
    function dc() {
        ;(Ql = Oi.current), $e(bn), $e(Oi)
    }
    var Pt = Ue(null),
        bl = null
    function ea(e) {
        var t = e.alternate
        Re(rt, rt.current & 1),
            Re(Pt, e),
            bl === null &&
                (t === null ||
                    bn.current !== null ||
                    t.memoizedState !== null) &&
                (bl = e)
    }
    function Af(e) {
        if (e.tag === 22) {
            if ((Re(rt, rt.current), Re(Pt, e), bl === null)) {
                var t = e.alternate
                t !== null && t.memoizedState !== null && (bl = e)
            }
        } else ta()
    }
    function ta() {
        Re(rt, rt.current), Re(Pt, Pt.current)
    }
    function Nl(e) {
        $e(Pt), bl === e && (bl = null), $e(rt)
    }
    var rt = Ue(0)
    function Di(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var l = t.memoizedState
                if (
                    l !== null &&
                    ((l = l.dehydrated),
                    l === null || l.data === '$?' || l.data === '$!')
                )
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                ;(t.child.return = t), (t = t.child)
                continue
            }
            if (t === e) break
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null
                t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
        }
        return null
    }
    var S0 =
            typeof AbortController < 'u'
                ? AbortController
                : function () {
                      var e = [],
                          t = (this.signal = {
                              aborted: !1,
                              addEventListener: function (l, a) {
                                  e.push(a)
                              },
                          })
                      this.abort = function () {
                          ;(t.aborted = !0),
                              e.forEach(function (l) {
                                  return l()
                              })
                      }
                  },
        E0 = n.unstable_scheduleCallback,
        R0 = n.unstable_NormalPriority,
        ct = {
            $$typeof: D,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
        }
    function hc() {
        return { controller: new S0(), data: new Map(), refCount: 0 }
    }
    function fu(e) {
        e.refCount--,
            e.refCount === 0 &&
                E0(R0, function () {
                    e.controller.abort()
                })
    }
    var du = null,
        mc = 0,
        Sn = 0,
        En = null
    function T0(e, t) {
        if (du === null) {
            var l = (du = [])
            ;(mc = 0),
                (Sn = Eo()),
                (En = {
                    status: 'pending',
                    value: void 0,
                    then: function (a) {
                        l.push(a)
                    },
                })
        }
        return mc++, t.then(Of, Of), t
    }
    function Of() {
        if (--mc === 0 && du !== null) {
            En !== null && (En.status = 'fulfilled')
            var e = du
            ;(du = null), (Sn = 0), (En = null)
            for (var t = 0; t < e.length; t++) (0, e[t])()
        }
    }
    function x0(e, t) {
        var l = [],
            a = {
                status: 'pending',
                value: null,
                reason: null,
                then: function (u) {
                    l.push(u)
                },
            }
        return (
            e.then(
                function () {
                    ;(a.status = 'fulfilled'), (a.value = t)
                    for (var u = 0; u < l.length; u++) (0, l[u])(t)
                },
                function (u) {
                    for (
                        a.status = 'rejected', a.reason = u, u = 0;
                        u < l.length;
                        u++
                    )
                        (0, l[u])(void 0)
                },
            ),
            a
        )
    }
    var Df = k.S
    k.S = function (e, t) {
        typeof t == 'object' &&
            t !== null &&
            typeof t.then == 'function' &&
            T0(e, t),
            Df !== null && Df(e, t)
    }
    var La = Ue(null)
    function yc() {
        var e = La.current
        return e !== null ? e : Xe.pooledCache
    }
    function wi(e, t) {
        t === null ? Re(La, La.current) : Re(La, t.pool)
    }
    function wf() {
        var e = yc()
        return e === null ? null : { parent: ct._currentValue, pool: e }
    }
    var la = 0,
        xe = null,
        He = null,
        at = null,
        Mi = !1,
        Rn = !1,
        Ha = !1,
        Ci = 0,
        hu = 0,
        Tn = null,
        A0 = 0
    function lt() {
        throw Error(o(321))
    }
    function vc(e, t) {
        if (t === null) return !1
        for (var l = 0; l < t.length && l < e.length; l++)
            if (!jt(e[l], t[l])) return !1
        return !0
    }
    function pc(e, t, l, a, u, r) {
        return (
            (la = r),
            (xe = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (k.H = e === null || e.memoizedState === null ? Ba : aa),
            (Ha = !1),
            (r = l(a, u)),
            (Ha = !1),
            Rn && (r = Cf(t, l, a, u)),
            Mf(e),
            r
        )
    }
    function Mf(e) {
        k.H = Sl
        var t = He !== null && He.next !== null
        if (
            ((la = 0),
            (at = He = xe = null),
            (Mi = !1),
            (hu = 0),
            (Tn = null),
            t)
        )
            throw Error(o(300))
        e === null ||
            st ||
            ((e = e.dependencies), e !== null && qi(e) && (st = !0))
    }
    function Cf(e, t, l, a) {
        xe = e
        var u = 0
        do {
            if ((Rn && (Tn = null), (hu = 0), (Rn = !1), 25 <= u))
                throw Error(o(301))
            if (((u += 1), (at = He = null), e.updateQueue != null)) {
                var r = e.updateQueue
                ;(r.lastEffect = null),
                    (r.events = null),
                    (r.stores = null),
                    r.memoCache != null && (r.memoCache.index = 0)
            }
            ;(k.H = qa), (r = t(l, a))
        } while (Rn)
        return r
    }
    function O0() {
        var e = k.H,
            t = e.useState()[0]
        return (
            (t = typeof t.then == 'function' ? mu(t) : t),
            (e = e.useState()[0]),
            (He !== null ? He.memoizedState : null) !== e && (xe.flags |= 1024),
            t
        )
    }
    function gc() {
        var e = Ci !== 0
        return (Ci = 0), e
    }
    function bc(e, t, l) {
        ;(t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l)
    }
    function Sc(e) {
        if (Mi) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue
                t !== null && (t.pending = null), (e = e.next)
            }
            Mi = !1
        }
        ;(la = 0), (at = He = xe = null), (Rn = !1), (hu = Ci = 0), (Tn = null)
    }
    function Ut() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        }
        return (
            at === null ? (xe.memoizedState = at = e) : (at = at.next = e), at
        )
    }
    function nt() {
        if (He === null) {
            var e = xe.alternate
            e = e !== null ? e.memoizedState : null
        } else e = He.next
        var t = at === null ? xe.memoizedState : at.next
        if (t !== null) (at = t), (He = e)
        else {
            if (e === null)
                throw xe.alternate === null ? Error(o(467)) : Error(o(310))
            ;(He = e),
                (e = {
                    memoizedState: He.memoizedState,
                    baseState: He.baseState,
                    baseQueue: He.baseQueue,
                    queue: He.queue,
                    next: null,
                }),
                at === null ? (xe.memoizedState = at = e) : (at = at.next = e)
        }
        return at
    }
    var _i
    _i = function () {
        return { lastEffect: null, events: null, stores: null, memoCache: null }
    }
    function mu(e) {
        var t = hu
        return (
            (hu += 1),
            Tn === null && (Tn = []),
            (e = bf(Tn, e, t)),
            (t = xe),
            (at === null ? t.memoizedState : at.next) === null &&
                ((t = t.alternate),
                (k.H = t === null || t.memoizedState === null ? Ba : aa)),
            e
        )
    }
    function Ui(e) {
        if (e !== null && typeof e == 'object') {
            if (typeof e.then == 'function') return mu(e)
            if (e.$$typeof === D) return Tt(e)
        }
        throw Error(o(438, String(e)))
    }
    function Ec(e) {
        var t = null,
            l = xe.updateQueue
        if ((l !== null && (t = l.memoCache), t == null)) {
            var a = xe.alternate
            a !== null &&
                ((a = a.updateQueue),
                a !== null &&
                    ((a = a.memoCache),
                    a != null &&
                        (t = {
                            data: a.data.map(function (u) {
                                return u.slice()
                            }),
                            index: 0,
                        })))
        }
        if (
            (t == null && (t = { data: [], index: 0 }),
            l === null && ((l = _i()), (xe.updateQueue = l)),
            (l.memoCache = t),
            (l = t.data[t.index]),
            l === void 0)
        )
            for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = oe
        return t.index++, l
    }
    function jl(e, t) {
        return typeof t == 'function' ? t(e) : t
    }
    function zi(e) {
        var t = nt()
        return Rc(t, He, e)
    }
    function Rc(e, t, l) {
        var a = e.queue
        if (a === null) throw Error(o(311))
        a.lastRenderedReducer = l
        var u = e.baseQueue,
            r = a.pending
        if (r !== null) {
            if (u !== null) {
                var d = u.next
                ;(u.next = r.next), (r.next = d)
            }
            ;(t.baseQueue = u = r), (a.pending = null)
        }
        if (((r = e.baseState), u === null)) e.memoizedState = r
        else {
            t = u.next
            var y = (d = null),
                b = null,
                T = t,
                G = !1
            do {
                var Q = T.lane & -536870913
                if (Q !== T.lane ? (Ce & Q) === Q : (la & Q) === Q) {
                    var N = T.revertLane
                    if (N === 0)
                        b !== null &&
                            (b = b.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    action: T.action,
                                    hasEagerState: T.hasEagerState,
                                    eagerState: T.eagerState,
                                    next: null,
                                }),
                            Q === Sn && (G = !0)
                    else if ((la & N) === N) {
                        ;(T = T.next), N === Sn && (G = !0)
                        continue
                    } else
                        (Q = {
                            lane: 0,
                            revertLane: T.revertLane,
                            action: T.action,
                            hasEagerState: T.hasEagerState,
                            eagerState: T.eagerState,
                            next: null,
                        }),
                            b === null
                                ? ((y = b = Q), (d = r))
                                : (b = b.next = Q),
                            (xe.lanes |= N),
                            (da |= N)
                    ;(Q = T.action),
                        Ha && l(r, Q),
                        (r = T.hasEagerState ? T.eagerState : l(r, Q))
                } else
                    (N = {
                        lane: Q,
                        revertLane: T.revertLane,
                        action: T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState: T.eagerState,
                        next: null,
                    }),
                        b === null ? ((y = b = N), (d = r)) : (b = b.next = N),
                        (xe.lanes |= Q),
                        (da |= Q)
                T = T.next
            } while (T !== null && T !== t)
            if (
                (b === null ? (d = r) : (b.next = y),
                !jt(r, e.memoizedState) &&
                    ((st = !0), G && ((l = En), l !== null)))
            )
                throw l
            ;(e.memoizedState = r),
                (e.baseState = d),
                (e.baseQueue = b),
                (a.lastRenderedState = r)
        }
        return u === null && (a.lanes = 0), [e.memoizedState, a.dispatch]
    }
    function Tc(e) {
        var t = nt(),
            l = t.queue
        if (l === null) throw Error(o(311))
        l.lastRenderedReducer = e
        var a = l.dispatch,
            u = l.pending,
            r = t.memoizedState
        if (u !== null) {
            l.pending = null
            var d = (u = u.next)
            do (r = e(r, d.action)), (d = d.next)
            while (d !== u)
            jt(r, t.memoizedState) || (st = !0),
                (t.memoizedState = r),
                t.baseQueue === null && (t.baseState = r),
                (l.lastRenderedState = r)
        }
        return [r, a]
    }
    function _f(e, t, l) {
        var a = xe,
            u = nt(),
            r = ze
        if (r) {
            if (l === void 0) throw Error(o(407))
            l = l()
        } else l = t()
        var d = !jt((He || u).memoizedState, l)
        if (
            (d && ((u.memoizedState = l), (st = !0)),
            (u = u.queue),
            Oc(Nf.bind(null, a, u, e), [e]),
            u.getSnapshot !== t ||
                d ||
                (at !== null && at.memoizedState.tag & 1))
        ) {
            if (
                ((a.flags |= 2048),
                xn(9, zf.bind(null, a, u, l, t), { destroy: void 0 }, null),
                Xe === null)
            )
                throw Error(o(349))
            r || (la & 60) !== 0 || Uf(a, t, l)
        }
        return l
    }
    function Uf(e, t, l) {
        ;(e.flags |= 16384),
            (e = { getSnapshot: t, value: l }),
            (t = xe.updateQueue),
            t === null
                ? ((t = _i()), (xe.updateQueue = t), (t.stores = [e]))
                : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e))
    }
    function zf(e, t, l, a) {
        ;(t.value = l), (t.getSnapshot = a), jf(t) && Lf(e)
    }
    function Nf(e, t, l) {
        return l(function () {
            jf(t) && Lf(e)
        })
    }
    function jf(e) {
        var t = e.getSnapshot
        e = e.value
        try {
            var l = t()
            return !jt(e, l)
        } catch {
            return !0
        }
    }
    function Lf(e) {
        var t = Il(e, 2)
        t !== null && Mt(t, e, 2)
    }
    function xc(e) {
        var t = Ut()
        if (typeof e == 'function') {
            var l = e
            if (((e = l()), Ha)) {
                il(!0)
                try {
                    l()
                } finally {
                    il(!1)
                }
            }
        }
        return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: jl,
                lastRenderedState: e,
            }),
            t
        )
    }
    function Hf(e, t, l, a) {
        return (e.baseState = l), Rc(e, He, typeof a == 'function' ? a : jl)
    }
    function D0(e, t, l, a, u) {
        if (Li(e)) throw Error(o(485))
        if (((e = t.action), e !== null)) {
            var r = {
                payload: u,
                action: e,
                next: null,
                isTransition: !0,
                status: 'pending',
                value: null,
                reason: null,
                listeners: [],
                then: function (d) {
                    r.listeners.push(d)
                },
            }
            k.T !== null ? l(!0) : (r.isTransition = !1),
                a(r),
                (l = t.pending),
                l === null
                    ? ((r.next = t.pending = r), Bf(t, r))
                    : ((r.next = l.next), (t.pending = l.next = r))
        }
    }
    function Bf(e, t) {
        var l = t.action,
            a = t.payload,
            u = e.state
        if (t.isTransition) {
            var r = k.T,
                d = {}
            k.T = d
            try {
                var y = l(u, a),
                    b = k.S
                b !== null && b(d, y), qf(e, t, y)
            } catch (T) {
                Ac(e, t, T)
            } finally {
                k.T = r
            }
        } else
            try {
                ;(r = l(u, a)), qf(e, t, r)
            } catch (T) {
                Ac(e, t, T)
            }
    }
    function qf(e, t, l) {
        l !== null && typeof l == 'object' && typeof l.then == 'function'
            ? l.then(
                  function (a) {
                      Yf(e, t, a)
                  },
                  function (a) {
                      return Ac(e, t, a)
                  },
              )
            : Yf(e, t, l)
    }
    function Yf(e, t, l) {
        ;(t.status = 'fulfilled'),
            (t.value = l),
            Gf(t),
            (e.state = l),
            (t = e.pending),
            t !== null &&
                ((l = t.next),
                l === t
                    ? (e.pending = null)
                    : ((l = l.next), (t.next = l), Bf(e, l)))
    }
    function Ac(e, t, l) {
        var a = e.pending
        if (((e.pending = null), a !== null)) {
            a = a.next
            do (t.status = 'rejected'), (t.reason = l), Gf(t), (t = t.next)
            while (t !== a)
        }
        e.action = null
    }
    function Gf(e) {
        e = e.listeners
        for (var t = 0; t < e.length; t++) (0, e[t])()
    }
    function Xf(e, t) {
        return t
    }
    function Vf(e, t) {
        if (ze) {
            var l = Xe.formState
            if (l !== null) {
                e: {
                    var a = xe
                    if (ze) {
                        if (gt) {
                            t: {
                                for (var u = gt, r = gl; u.nodeType !== 8; ) {
                                    if (!r) {
                                        u = null
                                        break t
                                    }
                                    if (((u = sl(u.nextSibling)), u === null)) {
                                        u = null
                                        break t
                                    }
                                }
                                ;(r = u.data),
                                    (u = r === 'F!' || r === 'F' ? u : null)
                            }
                            if (u) {
                                ;(gt = sl(u.nextSibling)), (a = u.data === 'F!')
                                break e
                            }
                        }
                        Na(a)
                    }
                    a = !1
                }
                a && (t = l[0])
            }
        }
        return (
            (l = Ut()),
            (l.memoizedState = l.baseState = t),
            (a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xf,
                lastRenderedState: t,
            }),
            (l.queue = a),
            (l = rd.bind(null, xe, a)),
            (a.dispatch = l),
            (a = xc(!1)),
            (r = _c.bind(null, xe, !1, a.queue)),
            (a = Ut()),
            (u = { state: t, dispatch: null, action: e, pending: null }),
            (a.queue = u),
            (l = D0.bind(null, xe, u, r, l)),
            (u.dispatch = l),
            (a.memoizedState = e),
            [t, l, !1]
        )
    }
    function Qf(e) {
        var t = nt()
        return Zf(t, He, e)
    }
    function Zf(e, t, l) {
        ;(t = Rc(e, t, Xf)[0]),
            (e = zi(jl)[0]),
            (t =
                typeof t == 'object' &&
                t !== null &&
                typeof t.then == 'function'
                    ? mu(t)
                    : t)
        var a = nt(),
            u = a.queue,
            r = u.dispatch
        return (
            l !== a.memoizedState &&
                ((xe.flags |= 2048),
                xn(9, w0.bind(null, u, l), { destroy: void 0 }, null)),
            [t, r, e]
        )
    }
    function w0(e, t) {
        e.action = t
    }
    function Kf(e) {
        var t = nt(),
            l = He
        if (l !== null) return Zf(t, l, e)
        nt(), (t = t.memoizedState), (l = nt())
        var a = l.queue.dispatch
        return (l.memoizedState = e), [t, a, !1]
    }
    function xn(e, t, l, a) {
        return (
            (e = { tag: e, create: t, inst: l, deps: a, next: null }),
            (t = xe.updateQueue),
            t === null && ((t = _i()), (xe.updateQueue = t)),
            (l = t.lastEffect),
            l === null
                ? (t.lastEffect = e.next = e)
                : ((a = l.next),
                  (l.next = e),
                  (e.next = a),
                  (t.lastEffect = e)),
            e
        )
    }
    function kf() {
        return nt().memoizedState
    }
    function Ni(e, t, l, a) {
        var u = Ut()
        ;(xe.flags |= e),
            (u.memoizedState = xn(
                1 | t,
                l,
                { destroy: void 0 },
                a === void 0 ? null : a,
            ))
    }
    function ji(e, t, l, a) {
        var u = nt()
        a = a === void 0 ? null : a
        var r = u.memoizedState.inst
        He !== null && a !== null && vc(a, He.memoizedState.deps)
            ? (u.memoizedState = xn(t, l, r, a))
            : ((xe.flags |= e), (u.memoizedState = xn(1 | t, l, r, a)))
    }
    function Jf(e, t) {
        Ni(8390656, 8, e, t)
    }
    function Oc(e, t) {
        ji(2048, 8, e, t)
    }
    function Ff(e, t) {
        return ji(4, 2, e, t)
    }
    function $f(e, t) {
        return ji(4, 4, e, t)
    }
    function Wf(e, t) {
        if (typeof t == 'function') {
            e = e()
            var l = t(e)
            return function () {
                typeof l == 'function' ? l() : t(null)
            }
        }
        if (t != null)
            return (
                (e = e()),
                (t.current = e),
                function () {
                    t.current = null
                }
            )
    }
    function Pf(e, t, l) {
        ;(l = l != null ? l.concat([e]) : null),
            ji(4, 4, Wf.bind(null, t, e), l)
    }
    function Dc() {}
    function If(e, t) {
        var l = nt()
        t = t === void 0 ? null : t
        var a = l.memoizedState
        return t !== null && vc(t, a[1])
            ? a[0]
            : ((l.memoizedState = [e, t]), e)
    }
    function ed(e, t) {
        var l = nt()
        t = t === void 0 ? null : t
        var a = l.memoizedState
        if (t !== null && vc(t, a[1])) return a[0]
        if (((a = e()), Ha)) {
            il(!0)
            try {
                e()
            } finally {
                il(!1)
            }
        }
        return (l.memoizedState = [a, t]), a
    }
    function wc(e, t, l) {
        return l === void 0 || (la & 1073741824) !== 0
            ? (e.memoizedState = t)
            : ((e.memoizedState = l), (e = lh()), (xe.lanes |= e), (da |= e), l)
    }
    function td(e, t, l, a) {
        return jt(l, t)
            ? l
            : bn.current !== null
              ? ((e = wc(e, l, a)), jt(e, t) || (st = !0), e)
              : (la & 42) === 0
                ? ((st = !0), (e.memoizedState = l))
                : ((e = lh()), (xe.lanes |= e), (da |= e), t)
    }
    function ld(e, t, l, a, u) {
        var r = P.p
        P.p = r !== 0 && 8 > r ? r : 8
        var d = k.T,
            y = {}
        ;(k.T = y), _c(e, !1, t, l)
        try {
            var b = u(),
                T = k.S
            if (
                (T !== null && T(y, b),
                b !== null &&
                    typeof b == 'object' &&
                    typeof b.then == 'function')
            ) {
                var G = x0(b, a)
                yu(e, t, G, qt(e))
            } else yu(e, t, a, qt(e))
        } catch (Q) {
            yu(
                e,
                t,
                { then: function () {}, status: 'rejected', reason: Q },
                qt(),
            )
        } finally {
            ;(P.p = r), (k.T = d)
        }
    }
    function M0() {}
    function Mc(e, t, l, a) {
        if (e.tag !== 5) throw Error(o(476))
        var u = ad(e).queue
        ld(
            e,
            u,
            t,
            Te,
            l === null
                ? M0
                : function () {
                      return nd(e), l(a)
                  },
        )
    }
    function ad(e) {
        var t = e.memoizedState
        if (t !== null) return t
        t = {
            memoizedState: Te,
            baseState: Te,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: jl,
                lastRenderedState: Te,
            },
            next: null,
        }
        var l = {}
        return (
            (t.next = {
                memoizedState: l,
                baseState: l,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: jl,
                    lastRenderedState: l,
                },
                next: null,
            }),
            (e.memoizedState = t),
            (e = e.alternate),
            e !== null && (e.memoizedState = t),
            t
        )
    }
    function nd(e) {
        var t = ad(e).next.queue
        yu(e, t, {}, qt())
    }
    function Cc() {
        return Tt(ju)
    }
    function ud() {
        return nt().memoizedState
    }
    function id() {
        return nt().memoizedState
    }
    function C0(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
                case 24:
                case 3:
                    var l = qt()
                    e = ia(l)
                    var a = ra(t, e, l)
                    a !== null && (Mt(a, t, l), gu(a, t, l)),
                        (t = { cache: hc() }),
                        (e.payload = t)
                    return
            }
            t = t.return
        }
    }
    function _0(e, t, l) {
        var a = qt()
        ;(l = {
            lane: a,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
            Li(e)
                ? cd(t, l)
                : ((l = ic(e, t, l, a)),
                  l !== null && (Mt(l, e, a), od(l, t, a)))
    }
    function rd(e, t, l) {
        var a = qt()
        yu(e, t, l, a)
    }
    function yu(e, t, l, a) {
        var u = {
            lane: a,
            revertLane: 0,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }
        if (Li(e)) cd(t, u)
        else {
            var r = e.alternate
            if (
                e.lanes === 0 &&
                (r === null || r.lanes === 0) &&
                ((r = t.lastRenderedReducer), r !== null)
            )
                try {
                    var d = t.lastRenderedState,
                        y = r(d, l)
                    if (((u.hasEagerState = !0), (u.eagerState = y), jt(y, d)))
                        return bi(e, t, u, 0), Xe === null && gi(), !1
                } catch {
                } finally {
                }
            if (((l = ic(e, t, u, a)), l !== null))
                return Mt(l, e, a), od(l, t, a), !0
        }
        return !1
    }
    function _c(e, t, l, a) {
        if (
            ((a = {
                lane: 2,
                revertLane: Eo(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            Li(e))
        ) {
            if (t) throw Error(o(479))
        } else (t = ic(e, l, a, 2)), t !== null && Mt(t, e, 2)
    }
    function Li(e) {
        var t = e.alternate
        return e === xe || (t !== null && t === xe)
    }
    function cd(e, t) {
        Rn = Mi = !0
        var l = e.pending
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (e.pending = t)
    }
    function od(e, t, l) {
        if ((l & 4194176) !== 0) {
            var a = t.lanes
            ;(a &= e.pendingLanes), (l |= a), (t.lanes = l), ie(e, l)
        }
    }
    var Sl = {
        readContext: Tt,
        use: Ui,
        useCallback: lt,
        useContext: lt,
        useEffect: lt,
        useImperativeHandle: lt,
        useLayoutEffect: lt,
        useInsertionEffect: lt,
        useMemo: lt,
        useReducer: lt,
        useRef: lt,
        useState: lt,
        useDebugValue: lt,
        useDeferredValue: lt,
        useTransition: lt,
        useSyncExternalStore: lt,
        useId: lt,
    }
    ;(Sl.useCacheRefresh = lt),
        (Sl.useMemoCache = lt),
        (Sl.useHostTransitionStatus = lt),
        (Sl.useFormState = lt),
        (Sl.useActionState = lt),
        (Sl.useOptimistic = lt)
    var Ba = {
        readContext: Tt,
        use: Ui,
        useCallback: function (e, t) {
            return (Ut().memoizedState = [e, t === void 0 ? null : t]), e
        },
        useContext: Tt,
        useEffect: Jf,
        useImperativeHandle: function (e, t, l) {
            ;(l = l != null ? l.concat([e]) : null),
                Ni(4194308, 4, Wf.bind(null, t, e), l)
        },
        useLayoutEffect: function (e, t) {
            return Ni(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            Ni(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var l = Ut()
            t = t === void 0 ? null : t
            var a = e()
            if (Ha) {
                il(!0)
                try {
                    e()
                } finally {
                    il(!1)
                }
            }
            return (l.memoizedState = [a, t]), a
        },
        useReducer: function (e, t, l) {
            var a = Ut()
            if (l !== void 0) {
                var u = l(t)
                if (Ha) {
                    il(!0)
                    try {
                        l(t)
                    } finally {
                        il(!1)
                    }
                }
            } else u = t
            return (
                (a.memoizedState = a.baseState = u),
                (e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: u,
                }),
                (a.queue = e),
                (e = e.dispatch = _0.bind(null, xe, e)),
                [a.memoizedState, e]
            )
        },
        useRef: function (e) {
            var t = Ut()
            return (e = { current: e }), (t.memoizedState = e)
        },
        useState: function (e) {
            e = xc(e)
            var t = e.queue,
                l = rd.bind(null, xe, t)
            return (t.dispatch = l), [e.memoizedState, l]
        },
        useDebugValue: Dc,
        useDeferredValue: function (e, t) {
            var l = Ut()
            return wc(l, e, t)
        },
        useTransition: function () {
            var e = xc(!1)
            return (
                (e = ld.bind(null, xe, e.queue, !0, !1)),
                (Ut().memoizedState = e),
                [!1, e]
            )
        },
        useSyncExternalStore: function (e, t, l) {
            var a = xe,
                u = Ut()
            if (ze) {
                if (l === void 0) throw Error(o(407))
                l = l()
            } else {
                if (((l = t()), Xe === null)) throw Error(o(349))
                ;(Ce & 60) !== 0 || Uf(a, t, l)
            }
            u.memoizedState = l
            var r = { value: l, getSnapshot: t }
            return (
                (u.queue = r),
                Jf(Nf.bind(null, a, r, e), [e]),
                (a.flags |= 2048),
                xn(9, zf.bind(null, a, r, l, t), { destroy: void 0 }, null),
                l
            )
        },
        useId: function () {
            var e = Ut(),
                t = Xe.identifierPrefix
            if (ze) {
                var l = zl,
                    a = Ul
                ;(l = (a & ~(1 << (32 - ot(a) - 1))).toString(32) + l),
                    (t = ':' + t + 'R' + l),
                    (l = Ci++),
                    0 < l && (t += 'H' + l.toString(32)),
                    (t += ':')
            } else (l = A0++), (t = ':' + t + 'r' + l.toString(32) + ':')
            return (e.memoizedState = t)
        },
        useCacheRefresh: function () {
            return (Ut().memoizedState = C0.bind(null, xe))
        },
    }
    ;(Ba.useMemoCache = Ec),
        (Ba.useHostTransitionStatus = Cc),
        (Ba.useFormState = Vf),
        (Ba.useActionState = Vf),
        (Ba.useOptimistic = function (e) {
            var t = Ut()
            t.memoizedState = t.baseState = e
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
            }
            return (
                (t.queue = l),
                (t = _c.bind(null, xe, !0, l)),
                (l.dispatch = t),
                [e, t]
            )
        })
    var aa = {
        readContext: Tt,
        use: Ui,
        useCallback: If,
        useContext: Tt,
        useEffect: Oc,
        useImperativeHandle: Pf,
        useInsertionEffect: Ff,
        useLayoutEffect: $f,
        useMemo: ed,
        useReducer: zi,
        useRef: kf,
        useState: function () {
            return zi(jl)
        },
        useDebugValue: Dc,
        useDeferredValue: function (e, t) {
            var l = nt()
            return td(l, He.memoizedState, e, t)
        },
        useTransition: function () {
            var e = zi(jl)[0],
                t = nt().memoizedState
            return [typeof e == 'boolean' ? e : mu(e), t]
        },
        useSyncExternalStore: _f,
        useId: ud,
    }
    ;(aa.useCacheRefresh = id),
        (aa.useMemoCache = Ec),
        (aa.useHostTransitionStatus = Cc),
        (aa.useFormState = Qf),
        (aa.useActionState = Qf),
        (aa.useOptimistic = function (e, t) {
            var l = nt()
            return Hf(l, He, e, t)
        })
    var qa = {
        readContext: Tt,
        use: Ui,
        useCallback: If,
        useContext: Tt,
        useEffect: Oc,
        useImperativeHandle: Pf,
        useInsertionEffect: Ff,
        useLayoutEffect: $f,
        useMemo: ed,
        useReducer: Tc,
        useRef: kf,
        useState: function () {
            return Tc(jl)
        },
        useDebugValue: Dc,
        useDeferredValue: function (e, t) {
            var l = nt()
            return He === null ? wc(l, e, t) : td(l, He.memoizedState, e, t)
        },
        useTransition: function () {
            var e = Tc(jl)[0],
                t = nt().memoizedState
            return [typeof e == 'boolean' ? e : mu(e), t]
        },
        useSyncExternalStore: _f,
        useId: ud,
    }
    ;(qa.useCacheRefresh = id),
        (qa.useMemoCache = Ec),
        (qa.useHostTransitionStatus = Cc),
        (qa.useFormState = Kf),
        (qa.useActionState = Kf),
        (qa.useOptimistic = function (e, t) {
            var l = nt()
            return He !== null
                ? Hf(l, He, e, t)
                : ((l.baseState = e), [e, l.queue.dispatch])
        })
    function Uc(e, t, l, a) {
        ;(t = e.memoizedState),
            (l = l(a, t)),
            (l = l == null ? t : fe({}, t, l)),
            (e.memoizedState = l),
            e.lanes === 0 && (e.updateQueue.baseState = l)
    }
    var zc = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? se(e) === e : !1
        },
        enqueueSetState: function (e, t, l) {
            e = e._reactInternals
            var a = qt(),
                u = ia(a)
            ;(u.payload = t),
                l != null && (u.callback = l),
                (t = ra(e, u, a)),
                t !== null && (Mt(t, e, a), gu(t, e, a))
        },
        enqueueReplaceState: function (e, t, l) {
            e = e._reactInternals
            var a = qt(),
                u = ia(a)
            ;(u.tag = 1),
                (u.payload = t),
                l != null && (u.callback = l),
                (t = ra(e, u, a)),
                t !== null && (Mt(t, e, a), gu(t, e, a))
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals
            var l = qt(),
                a = ia(l)
            ;(a.tag = 2),
                t != null && (a.callback = t),
                (t = ra(e, a, l)),
                t !== null && (Mt(t, e, l), gu(t, e, l))
        },
    }
    function sd(e, t, l, a, u, r, d) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == 'function'
                ? e.shouldComponentUpdate(a, r, d)
                : t.prototype && t.prototype.isPureReactComponent
                  ? !lu(l, a) || !lu(u, r)
                  : !0
        )
    }
    function fd(e, t, l, a) {
        ;(e = t.state),
            typeof t.componentWillReceiveProps == 'function' &&
                t.componentWillReceiveProps(l, a),
            typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
                t.UNSAFE_componentWillReceiveProps(l, a),
            t.state !== e && zc.enqueueReplaceState(t, t.state, null)
    }
    function Ya(e, t) {
        var l = t
        if ('ref' in t) {
            l = {}
            for (var a in t) a !== 'ref' && (l[a] = t[a])
        }
        if ((e = e.defaultProps)) {
            l === t && (l = fe({}, l))
            for (var u in e) l[u] === void 0 && (l[u] = e[u])
        }
        return l
    }
    var Hi =
        typeof reportError == 'function'
            ? reportError
            : function (e) {
                  if (
                      typeof window == 'object' &&
                      typeof window.ErrorEvent == 'function'
                  ) {
                      var t = new window.ErrorEvent('error', {
                          bubbles: !0,
                          cancelable: !0,
                          message:
                              typeof e == 'object' &&
                              e !== null &&
                              typeof e.message == 'string'
                                  ? String(e.message)
                                  : String(e),
                          error: e,
                      })
                      if (!window.dispatchEvent(t)) return
                  } else if (
                      typeof process == 'object' &&
                      typeof process.emit == 'function'
                  ) {
                      process.emit('uncaughtException', e)
                      return
                  }
                  console.error(e)
              }
    function dd(e) {
        Hi(e)
    }
    function hd(e) {
        console.error(e)
    }
    function md(e) {
        Hi(e)
    }
    function Bi(e, t) {
        try {
            var l = e.onUncaughtError
            l(t.value, { componentStack: t.stack })
        } catch (a) {
            setTimeout(function () {
                throw a
            })
        }
    }
    function yd(e, t, l) {
        try {
            var a = e.onCaughtError
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null,
            })
        } catch (u) {
            setTimeout(function () {
                throw u
            })
        }
    }
    function Nc(e, t, l) {
        return (
            (l = ia(l)),
            (l.tag = 3),
            (l.payload = { element: null }),
            (l.callback = function () {
                Bi(e, t)
            }),
            l
        )
    }
    function vd(e) {
        return (e = ia(e)), (e.tag = 3), e
    }
    function pd(e, t, l, a) {
        var u = l.type.getDerivedStateFromError
        if (typeof u == 'function') {
            var r = a.value
            ;(e.payload = function () {
                return u(r)
            }),
                (e.callback = function () {
                    yd(t, l, a)
                })
        }
        var d = l.stateNode
        d !== null &&
            typeof d.componentDidCatch == 'function' &&
            (e.callback = function () {
                yd(t, l, a),
                    typeof u != 'function' &&
                        (ha === null ? (ha = new Set([this])) : ha.add(this))
                var y = a.stack
                this.componentDidCatch(a.value, {
                    componentStack: y !== null ? y : '',
                })
            })
    }
    function U0(e, t, l, a, u) {
        if (
            ((l.flags |= 32768),
            a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
            if (
                ((t = l.alternate),
                t !== null && pu(t, l, u, !0),
                (l = Pt.current),
                l !== null)
            ) {
                switch (l.tag) {
                    case 13:
                        return (
                            bl === null
                                ? vo()
                                : l.alternate === null && Ie === 0 && (Ie = 3),
                            (l.flags &= -257),
                            (l.flags |= 65536),
                            (l.lanes = u),
                            a === sc
                                ? (l.flags |= 16384)
                                : ((t = l.updateQueue),
                                  t === null
                                      ? (l.updateQueue = new Set([a]))
                                      : t.add(a),
                                  go(e, a, u)),
                            !1
                        )
                    case 22:
                        return (
                            (l.flags |= 65536),
                            a === sc
                                ? (l.flags |= 16384)
                                : ((t = l.updateQueue),
                                  t === null
                                      ? ((t = {
                                            transitions: null,
                                            markerInstances: null,
                                            retryQueue: new Set([a]),
                                        }),
                                        (l.updateQueue = t))
                                      : ((l = t.retryQueue),
                                        l === null
                                            ? (t.retryQueue = new Set([a]))
                                            : l.add(a)),
                                  go(e, a, u)),
                            !1
                        )
                }
                throw Error(o(435, l.tag))
            }
            return go(e, a, u), vo(), !1
        }
        if (ze)
            return (
                (t = Pt.current),
                t !== null
                    ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                      (t.flags |= 65536),
                      (t.lanes = u),
                      a !== oc &&
                          ((e = Error(o(422), { cause: a })), iu(Ft(e, l))))
                    : (a !== oc &&
                          ((t = Error(o(423), { cause: a })), iu(Ft(t, l))),
                      (e = e.current.alternate),
                      (e.flags |= 65536),
                      (u &= -u),
                      (e.lanes |= u),
                      (a = Ft(a, l)),
                      (u = Nc(e.stateNode, a, u)),
                      Fc(e, u),
                      Ie !== 4 && (Ie = 2)),
                !1
            )
        var r = Error(o(520), { cause: a })
        if (
            ((r = Ft(r, l)),
            Ou === null ? (Ou = [r]) : Ou.push(r),
            Ie !== 4 && (Ie = 2),
            t === null)
        )
            return !0
        ;(a = Ft(a, l)), (l = t)
        do {
            switch (l.tag) {
                case 3:
                    return (
                        (l.flags |= 65536),
                        (e = u & -u),
                        (l.lanes |= e),
                        (e = Nc(l.stateNode, a, e)),
                        Fc(l, e),
                        !1
                    )
                case 1:
                    if (
                        ((t = l.type),
                        (r = l.stateNode),
                        (l.flags & 128) === 0 &&
                            (typeof t.getDerivedStateFromError == 'function' ||
                                (r !== null &&
                                    typeof r.componentDidCatch == 'function' &&
                                    (ha === null || !ha.has(r)))))
                    )
                        return (
                            (l.flags |= 65536),
                            (u &= -u),
                            (l.lanes |= u),
                            (u = vd(u)),
                            pd(u, e, l, a),
                            Fc(l, u),
                            !1
                        )
            }
            l = l.return
        } while (l !== null)
        return !1
    }
    var gd = Error(o(461)),
        st = !1
    function bt(e, t, l, a) {
        t.child = e === null ? Tf(t, null, l, a) : ja(t, e.child, l, a)
    }
    function bd(e, t, l, a, u) {
        l = l.render
        var r = t.ref
        if ('ref' in a) {
            var d = {}
            for (var y in a) y !== 'ref' && (d[y] = a[y])
        } else d = a
        return (
            Xa(t),
            (a = pc(e, t, l, d, r, u)),
            (y = gc()),
            e !== null && !st
                ? (bc(e, t, u), Ll(e, t, u))
                : (ze && y && rc(t), (t.flags |= 1), bt(e, t, a, u), t.child)
        )
    }
    function Sd(e, t, l, a, u) {
        if (e === null) {
            var r = l.type
            return typeof r == 'function' &&
                !ao(r) &&
                r.defaultProps === void 0 &&
                l.compare === null
                ? ((t.tag = 15), (t.type = r), Ed(e, t, r, a, u))
                : ((e = Vi(l.type, null, a, t, t.mode, u)),
                  (e.ref = t.ref),
                  (e.return = t),
                  (t.child = e))
        }
        if (((r = e.child), !Vc(e, u))) {
            var d = r.memoizedProps
            if (
                ((l = l.compare),
                (l = l !== null ? l : lu),
                l(d, a) && e.ref === t.ref)
            )
                return Ll(e, t, u)
        }
        return (
            (t.flags |= 1),
            (e = fa(r, a)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e)
        )
    }
    function Ed(e, t, l, a, u) {
        if (e !== null) {
            var r = e.memoizedProps
            if (lu(r, a) && e.ref === t.ref)
                if (((st = !1), (t.pendingProps = a = r), Vc(e, u)))
                    (e.flags & 131072) !== 0 && (st = !0)
                else return (t.lanes = e.lanes), Ll(e, t, u)
        }
        return jc(e, t, l, a, u)
    }
    function Rd(e, t, l) {
        var a = t.pendingProps,
            u = a.children,
            r = (t.stateNode._pendingVisibility & 2) !== 0,
            d = e !== null ? e.memoizedState : null
        if ((vu(e, t), a.mode === 'hidden' || r)) {
            if ((t.flags & 128) !== 0) {
                if (((a = d !== null ? d.baseLanes | l : l), e !== null)) {
                    for (u = t.child = e.child, r = 0; u !== null; )
                        (r = r | u.lanes | u.childLanes), (u = u.sibling)
                    t.childLanes = r & ~a
                } else (t.childLanes = 0), (t.child = null)
                return Td(e, t, a, l)
            }
            if ((l & 536870912) !== 0)
                (t.memoizedState = { baseLanes: 0, cachePool: null }),
                    e !== null && wi(t, d !== null ? d.cachePool : null),
                    d !== null ? xf(t, d) : fc(),
                    Af(t)
            else
                return (
                    (t.lanes = t.childLanes = 536870912),
                    Td(e, t, d !== null ? d.baseLanes | l : l, l)
                )
        } else
            d !== null
                ? (wi(t, d.cachePool), xf(t, d), ta(), (t.memoizedState = null))
                : (e !== null && wi(t, null), fc(), ta())
        return bt(e, t, u, l), t.child
    }
    function Td(e, t, l, a) {
        var u = yc()
        return (
            (u = u === null ? null : { parent: ct._currentValue, pool: u }),
            (t.memoizedState = { baseLanes: l, cachePool: u }),
            e !== null && wi(t, null),
            fc(),
            Af(t),
            e !== null && pu(e, t, a, !0),
            null
        )
    }
    function vu(e, t) {
        var l = t.ref
        if (l === null) e !== null && e.ref !== null && (t.flags |= 2097664)
        else {
            if (typeof l != 'function' && typeof l != 'object')
                throw Error(o(284))
            ;(e === null || e.ref !== l) && (t.flags |= 2097664)
        }
    }
    function jc(e, t, l, a, u) {
        return (
            Xa(t),
            (l = pc(e, t, l, a, void 0, u)),
            (a = gc()),
            e !== null && !st
                ? (bc(e, t, u), Ll(e, t, u))
                : (ze && a && rc(t), (t.flags |= 1), bt(e, t, l, u), t.child)
        )
    }
    function xd(e, t, l, a, u, r) {
        return (
            Xa(t),
            (t.updateQueue = null),
            (l = Cf(t, a, l, u)),
            Mf(e),
            (a = gc()),
            e !== null && !st
                ? (bc(e, t, r), Ll(e, t, r))
                : (ze && a && rc(t), (t.flags |= 1), bt(e, t, l, r), t.child)
        )
    }
    function Ad(e, t, l, a, u) {
        if ((Xa(t), t.stateNode === null)) {
            var r = yn,
                d = l.contextType
            typeof d == 'object' && d !== null && (r = Tt(d)),
                (r = new l(a, r)),
                (t.memoizedState =
                    r.state !== null && r.state !== void 0 ? r.state : null),
                (r.updater = zc),
                (t.stateNode = r),
                (r._reactInternals = t),
                (r = t.stateNode),
                (r.props = a),
                (r.state = t.memoizedState),
                (r.refs = {}),
                kc(t),
                (d = l.contextType),
                (r.context = typeof d == 'object' && d !== null ? Tt(d) : yn),
                (r.state = t.memoizedState),
                (d = l.getDerivedStateFromProps),
                typeof d == 'function' &&
                    (Uc(t, l, d, a), (r.state = t.memoizedState)),
                typeof l.getDerivedStateFromProps == 'function' ||
                    typeof r.getSnapshotBeforeUpdate == 'function' ||
                    (typeof r.UNSAFE_componentWillMount != 'function' &&
                        typeof r.componentWillMount != 'function') ||
                    ((d = r.state),
                    typeof r.componentWillMount == 'function' &&
                        r.componentWillMount(),
                    typeof r.UNSAFE_componentWillMount == 'function' &&
                        r.UNSAFE_componentWillMount(),
                    d !== r.state && zc.enqueueReplaceState(r, r.state, null),
                    Su(t, a, r, u),
                    bu(),
                    (r.state = t.memoizedState)),
                typeof r.componentDidMount == 'function' &&
                    (t.flags |= 4194308),
                (a = !0)
        } else if (e === null) {
            r = t.stateNode
            var y = t.memoizedProps,
                b = Ya(l, y)
            r.props = b
            var T = r.context,
                G = l.contextType
            ;(d = yn), typeof G == 'object' && G !== null && (d = Tt(G))
            var Q = l.getDerivedStateFromProps
            ;(G =
                typeof Q == 'function' ||
                typeof r.getSnapshotBeforeUpdate == 'function'),
                (y = t.pendingProps !== y),
                G ||
                    (typeof r.UNSAFE_componentWillReceiveProps != 'function' &&
                        typeof r.componentWillReceiveProps != 'function') ||
                    ((y || T !== d) && fd(t, r, a, d)),
                (ua = !1)
            var N = t.memoizedState
            ;(r.state = N),
                Su(t, a, r, u),
                bu(),
                (T = t.memoizedState),
                y || N !== T || ua
                    ? (typeof Q == 'function' &&
                          (Uc(t, l, Q, a), (T = t.memoizedState)),
                      (b = ua || sd(t, l, b, a, N, T, d))
                          ? (G ||
                                (typeof r.UNSAFE_componentWillMount !=
                                    'function' &&
                                    typeof r.componentWillMount !=
                                        'function') ||
                                (typeof r.componentWillMount == 'function' &&
                                    r.componentWillMount(),
                                typeof r.UNSAFE_componentWillMount ==
                                    'function' &&
                                    r.UNSAFE_componentWillMount()),
                            typeof r.componentDidMount == 'function' &&
                                (t.flags |= 4194308))
                          : (typeof r.componentDidMount == 'function' &&
                                (t.flags |= 4194308),
                            (t.memoizedProps = a),
                            (t.memoizedState = T)),
                      (r.props = a),
                      (r.state = T),
                      (r.context = d),
                      (a = b))
                    : (typeof r.componentDidMount == 'function' &&
                          (t.flags |= 4194308),
                      (a = !1))
        } else {
            ;(r = t.stateNode),
                Jc(e, t),
                (d = t.memoizedProps),
                (G = Ya(l, d)),
                (r.props = G),
                (Q = t.pendingProps),
                (N = r.context),
                (T = l.contextType),
                (b = yn),
                typeof T == 'object' && T !== null && (b = Tt(T)),
                (y = l.getDerivedStateFromProps),
                (T =
                    typeof y == 'function' ||
                    typeof r.getSnapshotBeforeUpdate == 'function') ||
                    (typeof r.UNSAFE_componentWillReceiveProps != 'function' &&
                        typeof r.componentWillReceiveProps != 'function') ||
                    ((d !== Q || N !== b) && fd(t, r, a, b)),
                (ua = !1),
                (N = t.memoizedState),
                (r.state = N),
                Su(t, a, r, u),
                bu()
            var B = t.memoizedState
            d !== Q ||
            N !== B ||
            ua ||
            (e !== null && e.dependencies !== null && qi(e.dependencies))
                ? (typeof y == 'function' &&
                      (Uc(t, l, y, a), (B = t.memoizedState)),
                  (G =
                      ua ||
                      sd(t, l, G, a, N, B, b) ||
                      (e !== null &&
                          e.dependencies !== null &&
                          qi(e.dependencies)))
                      ? (T ||
                            (typeof r.UNSAFE_componentWillUpdate !=
                                'function' &&
                                typeof r.componentWillUpdate != 'function') ||
                            (typeof r.componentWillUpdate == 'function' &&
                                r.componentWillUpdate(a, B, b),
                            typeof r.UNSAFE_componentWillUpdate == 'function' &&
                                r.UNSAFE_componentWillUpdate(a, B, b)),
                        typeof r.componentDidUpdate == 'function' &&
                            (t.flags |= 4),
                        typeof r.getSnapshotBeforeUpdate == 'function' &&
                            (t.flags |= 1024))
                      : (typeof r.componentDidUpdate != 'function' ||
                            (d === e.memoizedProps && N === e.memoizedState) ||
                            (t.flags |= 4),
                        typeof r.getSnapshotBeforeUpdate != 'function' ||
                            (d === e.memoizedProps && N === e.memoizedState) ||
                            (t.flags |= 1024),
                        (t.memoizedProps = a),
                        (t.memoizedState = B)),
                  (r.props = a),
                  (r.state = B),
                  (r.context = b),
                  (a = G))
                : (typeof r.componentDidUpdate != 'function' ||
                      (d === e.memoizedProps && N === e.memoizedState) ||
                      (t.flags |= 4),
                  typeof r.getSnapshotBeforeUpdate != 'function' ||
                      (d === e.memoizedProps && N === e.memoizedState) ||
                      (t.flags |= 1024),
                  (a = !1))
        }
        return (
            (r = a),
            vu(e, t),
            (a = (t.flags & 128) !== 0),
            r || a
                ? ((r = t.stateNode),
                  (l =
                      a && typeof l.getDerivedStateFromError != 'function'
                          ? null
                          : r.render()),
                  (t.flags |= 1),
                  e !== null && a
                      ? ((t.child = ja(t, e.child, null, u)),
                        (t.child = ja(t, null, l, u)))
                      : bt(e, t, l, u),
                  (t.memoizedState = r.state),
                  (e = t.child))
                : (e = Ll(e, t, u)),
            e
        )
    }
    function Od(e, t, l, a) {
        return uu(), (t.flags |= 256), bt(e, t, l, a), t.child
    }
    var Lc = { dehydrated: null, treeContext: null, retryLane: 0 }
    function Hc(e) {
        return { baseLanes: e, cachePool: wf() }
    }
    function Bc(e, t, l) {
        return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= ll), e
    }
    function Dd(e, t, l) {
        var a = t.pendingProps,
            u = !1,
            r = (t.flags & 128) !== 0,
            d
        if (
            ((d = r) ||
                (d =
                    e !== null && e.memoizedState === null
                        ? !1
                        : (rt.current & 2) !== 0),
            d && ((u = !0), (t.flags &= -129)),
            (d = (t.flags & 32) !== 0),
            (t.flags &= -33),
            e === null)
        ) {
            if (ze) {
                if ((u ? ea(t) : ta(), ze)) {
                    var y = gt,
                        b
                    if ((b = y)) {
                        e: {
                            for (b = y, y = gl; b.nodeType !== 8; ) {
                                if (!y) {
                                    y = null
                                    break e
                                }
                                if (((b = sl(b.nextSibling)), b === null)) {
                                    y = null
                                    break e
                                }
                            }
                            y = b
                        }
                        y !== null
                            ? ((t.memoizedState = {
                                  dehydrated: y,
                                  treeContext:
                                      Ua !== null
                                          ? { id: Ul, overflow: zl }
                                          : null,
                                  retryLane: 536870912,
                              }),
                              (b = tl(18, null, null, 0)),
                              (b.stateNode = y),
                              (b.return = t),
                              (t.child = b),
                              (wt = t),
                              (gt = null),
                              (b = !0))
                            : (b = !1)
                    }
                    b || Na(t)
                }
                if (
                    ((y = t.memoizedState),
                    y !== null && ((y = y.dehydrated), y !== null))
                )
                    return (
                        y.data === '$!'
                            ? (t.lanes = 16)
                            : (t.lanes = 536870912),
                        null
                    )
                Nl(t)
            }
            return (
                (y = a.children),
                (a = a.fallback),
                u
                    ? (ta(),
                      (u = t.mode),
                      (y = Yc({ mode: 'hidden', children: y }, u)),
                      (a = Qa(a, u, l, null)),
                      (y.return = t),
                      (a.return = t),
                      (y.sibling = a),
                      (t.child = y),
                      (u = t.child),
                      (u.memoizedState = Hc(l)),
                      (u.childLanes = Bc(e, d, l)),
                      (t.memoizedState = Lc),
                      a)
                    : (ea(t), qc(t, y))
            )
        }
        if (
            ((b = e.memoizedState),
            b !== null && ((y = b.dehydrated), y !== null))
        ) {
            if (r)
                t.flags & 256
                    ? (ea(t), (t.flags &= -257), (t = Gc(e, t, l)))
                    : t.memoizedState !== null
                      ? (ta(),
                        (t.child = e.child),
                        (t.flags |= 128),
                        (t = null))
                      : (ta(),
                        (u = a.fallback),
                        (y = t.mode),
                        (a = Yc({ mode: 'visible', children: a.children }, y)),
                        (u = Qa(u, y, l, null)),
                        (u.flags |= 2),
                        (a.return = t),
                        (u.return = t),
                        (a.sibling = u),
                        (t.child = a),
                        ja(t, e.child, null, l),
                        (a = t.child),
                        (a.memoizedState = Hc(l)),
                        (a.childLanes = Bc(e, d, l)),
                        (t.memoizedState = Lc),
                        (t = u))
            else if ((ea(t), y.data === '$!')) {
                if (((d = y.nextSibling && y.nextSibling.dataset), d))
                    var T = d.dgst
                ;(d = T),
                    (a = Error(o(419))),
                    (a.stack = ''),
                    (a.digest = d),
                    iu({ value: a, source: null, stack: null }),
                    (t = Gc(e, t, l))
            } else if (
                (st || pu(e, t, l, !1), (d = (l & e.childLanes) !== 0), st || d)
            ) {
                if (((d = Xe), d !== null)) {
                    if (((a = l & -l), (a & 42) !== 0)) a = 1
                    else
                        switch (a) {
                            case 2:
                                a = 1
                                break
                            case 8:
                                a = 4
                                break
                            case 32:
                                a = 16
                                break
                            case 128:
                            case 256:
                            case 512:
                            case 1024:
                            case 2048:
                            case 4096:
                            case 8192:
                            case 16384:
                            case 32768:
                            case 65536:
                            case 131072:
                            case 262144:
                            case 524288:
                            case 1048576:
                            case 2097152:
                            case 4194304:
                            case 8388608:
                            case 16777216:
                            case 33554432:
                                a = 64
                                break
                            case 268435456:
                                a = 134217728
                                break
                            default:
                                a = 0
                        }
                    if (
                        ((a = (a & (d.suspendedLanes | l)) !== 0 ? 0 : a),
                        a !== 0 && a !== b.retryLane)
                    )
                        throw ((b.retryLane = a), Il(e, a), Mt(d, e, a), gd)
                }
                y.data === '$?' || vo(), (t = Gc(e, t, l))
            } else
                y.data === '$?'
                    ? ((t.flags |= 128),
                      (t.child = e.child),
                      (t = k0.bind(null, e)),
                      (y._reactRetry = t),
                      (t = null))
                    : ((e = b.treeContext),
                      (gt = sl(y.nextSibling)),
                      (wt = t),
                      (ze = !0),
                      (cl = null),
                      (gl = !1),
                      e !== null &&
                          (($t[Wt++] = Ul),
                          ($t[Wt++] = zl),
                          ($t[Wt++] = Ua),
                          (Ul = e.id),
                          (zl = e.overflow),
                          (Ua = t)),
                      (t = qc(t, a.children)),
                      (t.flags |= 4096))
            return t
        }
        return u
            ? (ta(),
              (u = a.fallback),
              (y = t.mode),
              (b = e.child),
              (T = b.sibling),
              (a = fa(b, { mode: 'hidden', children: a.children })),
              (a.subtreeFlags = b.subtreeFlags & 31457280),
              T !== null
                  ? (u = fa(T, u))
                  : ((u = Qa(u, y, l, null)), (u.flags |= 2)),
              (u.return = t),
              (a.return = t),
              (a.sibling = u),
              (t.child = a),
              (a = u),
              (u = t.child),
              (y = e.child.memoizedState),
              y === null
                  ? (y = Hc(l))
                  : ((b = y.cachePool),
                    b !== null
                        ? ((T = ct._currentValue),
                          (b = b.parent !== T ? { parent: T, pool: T } : b))
                        : (b = wf()),
                    (y = { baseLanes: y.baseLanes | l, cachePool: b })),
              (u.memoizedState = y),
              (u.childLanes = Bc(e, d, l)),
              (t.memoizedState = Lc),
              a)
            : (ea(t),
              (l = e.child),
              (e = l.sibling),
              (l = fa(l, { mode: 'visible', children: a.children })),
              (l.return = t),
              (l.sibling = null),
              e !== null &&
                  ((d = t.deletions),
                  d === null
                      ? ((t.deletions = [e]), (t.flags |= 16))
                      : d.push(e)),
              (t.child = l),
              (t.memoizedState = null),
              l)
    }
    function qc(e, t) {
        return (
            (t = Yc({ mode: 'visible', children: t }, e.mode)),
            (t.return = e),
            (e.child = t)
        )
    }
    function Yc(e, t) {
        return Id(e, t, 0, null)
    }
    function Gc(e, t, l) {
        return (
            ja(t, e.child, null, l),
            (e = qc(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
        )
    }
    function wd(e, t, l) {
        e.lanes |= t
        var a = e.alternate
        a !== null && (a.lanes |= t), Zc(e.return, t, l)
    }
    function Xc(e, t, l, a, u) {
        var r = e.memoizedState
        r === null
            ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: a,
                  tail: l,
                  tailMode: u,
              })
            : ((r.isBackwards = t),
              (r.rendering = null),
              (r.renderingStartTime = 0),
              (r.last = a),
              (r.tail = l),
              (r.tailMode = u))
    }
    function Md(e, t, l) {
        var a = t.pendingProps,
            u = a.revealOrder,
            r = a.tail
        if ((bt(e, t, a.children, l), (a = rt.current), (a & 2) !== 0))
            (a = (a & 1) | 2), (t.flags |= 128)
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13) e.memoizedState !== null && wd(e, l, t)
                    else if (e.tag === 19) wd(e, l, t)
                    else if (e.child !== null) {
                        ;(e.child.return = e), (e = e.child)
                        continue
                    }
                    if (e === t) break e
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t) break e
                        e = e.return
                    }
                    ;(e.sibling.return = e.return), (e = e.sibling)
                }
            a &= 1
        }
        switch ((Re(rt, a), u)) {
            case 'forwards':
                for (l = t.child, u = null; l !== null; )
                    (e = l.alternate),
                        e !== null && Di(e) === null && (u = l),
                        (l = l.sibling)
                ;(l = u),
                    l === null
                        ? ((u = t.child), (t.child = null))
                        : ((u = l.sibling), (l.sibling = null)),
                    Xc(t, !1, u, l, r)
                break
            case 'backwards':
                for (l = null, u = t.child, t.child = null; u !== null; ) {
                    if (((e = u.alternate), e !== null && Di(e) === null)) {
                        t.child = u
                        break
                    }
                    ;(e = u.sibling), (u.sibling = l), (l = u), (u = e)
                }
                Xc(t, !0, l, null, r)
                break
            case 'together':
                Xc(t, !1, null, null, void 0)
                break
            default:
                t.memoizedState = null
        }
        return t.child
    }
    function Ll(e, t, l) {
        if (
            (e !== null && (t.dependencies = e.dependencies),
            (da |= t.lanes),
            (l & t.childLanes) === 0)
        )
            if (e !== null) {
                if ((pu(e, t, l, !1), (l & t.childLanes) === 0)) return null
            } else return null
        if (e !== null && t.child !== e.child) throw Error(o(153))
        if (t.child !== null) {
            for (
                e = t.child,
                    l = fa(e, e.pendingProps),
                    t.child = l,
                    l.return = t;
                e.sibling !== null;

            )
                (e = e.sibling),
                    (l = l.sibling = fa(e, e.pendingProps)),
                    (l.return = t)
            l.sibling = null
        }
        return t.child
    }
    function Vc(e, t) {
        return (e.lanes & t) !== 0
            ? !0
            : ((e = e.dependencies), !!(e !== null && qi(e)))
    }
    function z0(e, t, l) {
        switch (t.tag) {
            case 3:
                tn(t, t.stateNode.containerInfo),
                    na(t, ct, e.memoizedState.cache),
                    uu()
                break
            case 27:
            case 5:
                ln(t)
                break
            case 4:
                tn(t, t.stateNode.containerInfo)
                break
            case 10:
                na(t, t.type, t.memoizedProps.value)
                break
            case 13:
                var a = t.memoizedState
                if (a !== null)
                    return a.dehydrated !== null
                        ? (ea(t), (t.flags |= 128), null)
                        : (l & t.child.childLanes) !== 0
                          ? Dd(e, t, l)
                          : (ea(t),
                            (e = Ll(e, t, l)),
                            e !== null ? e.sibling : null)
                ea(t)
                break
            case 19:
                var u = (e.flags & 128) !== 0
                if (
                    ((a = (l & t.childLanes) !== 0),
                    a || (pu(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
                    u)
                ) {
                    if (a) return Md(e, t, l)
                    t.flags |= 128
                }
                if (
                    ((u = t.memoizedState),
                    u !== null &&
                        ((u.rendering = null),
                        (u.tail = null),
                        (u.lastEffect = null)),
                    Re(rt, rt.current),
                    a)
                )
                    break
                return null
            case 22:
            case 23:
                return (t.lanes = 0), Rd(e, t, l)
            case 24:
                na(t, ct, e.memoizedState.cache)
        }
        return Ll(e, t, l)
    }
    function Cd(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) st = !0
            else {
                if (!Vc(e, l) && (t.flags & 128) === 0)
                    return (st = !1), z0(e, t, l)
                st = (e.flags & 131072) !== 0
            }
        else (st = !1), ze && (t.flags & 1048576) !== 0 && mf(t, Ri, t.index)
        switch (((t.lanes = 0), t.tag)) {
            case 16:
                e: {
                    e = t.pendingProps
                    var a = t.elementType,
                        u = a._init
                    if (
                        ((a = u(a._payload)),
                        (t.type = a),
                        typeof a == 'function')
                    )
                        ao(a)
                            ? ((e = Ya(a, e)),
                              (t.tag = 1),
                              (t = Ad(null, t, a, e, l)))
                            : ((t.tag = 0), (t = jc(null, t, a, e, l)))
                    else {
                        if (a != null) {
                            if (((u = a.$$typeof), u === A)) {
                                ;(t.tag = 11), (t = bd(null, t, a, e, l))
                                break e
                            } else if (u === q) {
                                ;(t.tag = 14), (t = Sd(null, t, a, e, l))
                                break e
                            }
                        }
                        throw ((t = be(a) || a), Error(o(306, t, '')))
                    }
                }
                return t
            case 0:
                return jc(e, t, t.type, t.pendingProps, l)
            case 1:
                return (
                    (a = t.type), (u = Ya(a, t.pendingProps)), Ad(e, t, a, u, l)
                )
            case 3:
                e: {
                    if ((tn(t, t.stateNode.containerInfo), e === null))
                        throw Error(o(387))
                    var r = t.pendingProps
                    ;(u = t.memoizedState),
                        (a = u.element),
                        Jc(e, t),
                        Su(t, r, null, l)
                    var d = t.memoizedState
                    if (
                        ((r = d.cache),
                        na(t, ct, r),
                        r !== u.cache && Kc(t, [ct], l, !0),
                        bu(),
                        (r = d.element),
                        u.isDehydrated)
                    )
                        if (
                            ((u = {
                                element: r,
                                isDehydrated: !1,
                                cache: d.cache,
                            }),
                            (t.updateQueue.baseState = u),
                            (t.memoizedState = u),
                            t.flags & 256)
                        ) {
                            t = Od(e, t, r, l)
                            break e
                        } else if (r !== a) {
                            ;(a = Ft(Error(o(424)), t)),
                                iu(a),
                                (t = Od(e, t, r, l))
                            break e
                        } else
                            for (
                                gt = sl(t.stateNode.containerInfo.firstChild),
                                    wt = t,
                                    ze = !0,
                                    cl = null,
                                    gl = !0,
                                    l = Tf(t, null, r, l),
                                    t.child = l;
                                l;

                            )
                                (l.flags = (l.flags & -3) | 4096),
                                    (l = l.sibling)
                    else {
                        if ((uu(), r === a)) {
                            t = Ll(e, t, l)
                            break e
                        }
                        bt(e, t, r, l)
                    }
                    t = t.child
                }
                return t
            case 26:
                return (
                    vu(e, t),
                    e === null
                        ? (l = zh(t.type, null, t.pendingProps, null))
                            ? (t.memoizedState = l)
                            : ze ||
                              ((l = t.type),
                              (e = t.pendingProps),
                              (a = tr(ml.current).createElement(l)),
                              (a[ne] = t),
                              (a[de] = e),
                              St(a, l, e),
                              Ge(a),
                              (t.stateNode = a))
                        : (t.memoizedState = zh(
                              t.type,
                              e.memoizedProps,
                              t.pendingProps,
                              e.memoizedState,
                          )),
                    null
                )
            case 27:
                return (
                    ln(t),
                    e === null &&
                        ze &&
                        ((a = t.stateNode =
                            Ch(t.type, t.pendingProps, ml.current)),
                        (wt = t),
                        (gl = !0),
                        (gt = sl(a.firstChild))),
                    (a = t.pendingProps.children),
                    e !== null || ze
                        ? bt(e, t, a, l)
                        : (t.child = ja(t, null, a, l)),
                    vu(e, t),
                    t.child
                )
            case 5:
                return (
                    e === null &&
                        ze &&
                        ((u = a = gt) &&
                            ((a = ov(a, t.type, t.pendingProps, gl)),
                            a !== null
                                ? ((t.stateNode = a),
                                  (wt = t),
                                  (gt = sl(a.firstChild)),
                                  (gl = !1),
                                  (u = !0))
                                : (u = !1)),
                        u || Na(t)),
                    ln(t),
                    (u = t.type),
                    (r = t.pendingProps),
                    (d = e !== null ? e.memoizedProps : null),
                    (a = r.children),
                    Co(u, r)
                        ? (a = null)
                        : d !== null && Co(u, d) && (t.flags |= 32),
                    t.memoizedState !== null &&
                        ((u = pc(e, t, O0, null, null, l)),
                        (ju._currentValue = u)),
                    vu(e, t),
                    bt(e, t, a, l),
                    t.child
                )
            case 6:
                return (
                    e === null &&
                        ze &&
                        ((e = l = gt) &&
                            ((l = sv(l, t.pendingProps, gl)),
                            l !== null
                                ? ((t.stateNode = l),
                                  (wt = t),
                                  (gt = null),
                                  (e = !0))
                                : (e = !1)),
                        e || Na(t)),
                    null
                )
            case 13:
                return Dd(e, t, l)
            case 4:
                return (
                    tn(t, t.stateNode.containerInfo),
                    (a = t.pendingProps),
                    e === null ? (t.child = ja(t, null, a, l)) : bt(e, t, a, l),
                    t.child
                )
            case 11:
                return bd(e, t, t.type, t.pendingProps, l)
            case 7:
                return bt(e, t, t.pendingProps, l), t.child
            case 8:
                return bt(e, t, t.pendingProps.children, l), t.child
            case 12:
                return bt(e, t, t.pendingProps.children, l), t.child
            case 10:
                return (
                    (a = t.pendingProps),
                    na(t, t.type, a.value),
                    bt(e, t, a.children, l),
                    t.child
                )
            case 9:
                return (
                    (u = t.type._context),
                    (a = t.pendingProps.children),
                    Xa(t),
                    (u = Tt(u)),
                    (a = a(u)),
                    (t.flags |= 1),
                    bt(e, t, a, l),
                    t.child
                )
            case 14:
                return Sd(e, t, t.type, t.pendingProps, l)
            case 15:
                return Ed(e, t, t.type, t.pendingProps, l)
            case 19:
                return Md(e, t, l)
            case 22:
                return Rd(e, t, l)
            case 24:
                return (
                    Xa(t),
                    (a = Tt(ct)),
                    e === null
                        ? ((u = yc()),
                          u === null &&
                              ((u = Xe),
                              (r = hc()),
                              (u.pooledCache = r),
                              r.refCount++,
                              r !== null && (u.pooledCacheLanes |= l),
                              (u = r)),
                          (t.memoizedState = { parent: a, cache: u }),
                          kc(t),
                          na(t, ct, u))
                        : ((e.lanes & l) !== 0 &&
                              (Jc(e, t), Su(t, null, null, l), bu()),
                          (u = e.memoizedState),
                          (r = t.memoizedState),
                          u.parent !== a
                              ? ((u = { parent: a, cache: a }),
                                (t.memoizedState = u),
                                t.lanes === 0 &&
                                    (t.memoizedState = t.updateQueue.baseState =
                                        u),
                                na(t, ct, a))
                              : ((a = r.cache),
                                na(t, ct, a),
                                a !== u.cache && Kc(t, [ct], l, !0))),
                    bt(e, t, t.pendingProps.children, l),
                    t.child
                )
            case 29:
                throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }
    var Qc = Ue(null),
        Ga = null,
        Hl = null
    function na(e, t, l) {
        Re(Qc, t._currentValue), (t._currentValue = l)
    }
    function Bl(e) {
        ;(e._currentValue = Qc.current), $e(Qc)
    }
    function Zc(e, t, l) {
        for (; e !== null; ) {
            var a = e.alternate
            if (
                ((e.childLanes & t) !== t
                    ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
                    : a !== null &&
                      (a.childLanes & t) !== t &&
                      (a.childLanes |= t),
                e === l)
            )
                break
            e = e.return
        }
    }
    function Kc(e, t, l, a) {
        var u = e.child
        for (u !== null && (u.return = e); u !== null; ) {
            var r = u.dependencies
            if (r !== null) {
                var d = u.child
                r = r.firstContext
                e: for (; r !== null; ) {
                    var y = r
                    r = u
                    for (var b = 0; b < t.length; b++)
                        if (y.context === t[b]) {
                            ;(r.lanes |= l),
                                (y = r.alternate),
                                y !== null && (y.lanes |= l),
                                Zc(r.return, l, e),
                                a || (d = null)
                            break e
                        }
                    r = y.next
                }
            } else if (u.tag === 18) {
                if (((d = u.return), d === null)) throw Error(o(341))
                ;(d.lanes |= l),
                    (r = d.alternate),
                    r !== null && (r.lanes |= l),
                    Zc(d, l, e),
                    (d = null)
            } else d = u.child
            if (d !== null) d.return = u
            else
                for (d = u; d !== null; ) {
                    if (d === e) {
                        d = null
                        break
                    }
                    if (((u = d.sibling), u !== null)) {
                        ;(u.return = d.return), (d = u)
                        break
                    }
                    d = d.return
                }
            u = d
        }
    }
    function pu(e, t, l, a) {
        e = null
        for (var u = t, r = !1; u !== null; ) {
            if (!r) {
                if ((u.flags & 524288) !== 0) r = !0
                else if ((u.flags & 262144) !== 0) break
            }
            if (u.tag === 10) {
                var d = u.alternate
                if (d === null) throw Error(o(387))
                if (((d = d.memoizedProps), d !== null)) {
                    var y = u.type
                    jt(u.pendingProps.value, d.value) ||
                        (e !== null ? e.push(y) : (e = [y]))
                }
            } else if (u === Xt.current) {
                if (((d = u.alternate), d === null)) throw Error(o(387))
                d.memoizedState.memoizedState !==
                    u.memoizedState.memoizedState &&
                    (e !== null ? e.push(ju) : (e = [ju]))
            }
            u = u.return
        }
        e !== null && Kc(t, e, l, a), (t.flags |= 262144)
    }
    function qi(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!jt(e.context._currentValue, e.memoizedValue)) return !0
            e = e.next
        }
        return !1
    }
    function Xa(e) {
        ;(Ga = e),
            (Hl = null),
            (e = e.dependencies),
            e !== null && (e.firstContext = null)
    }
    function Tt(e) {
        return _d(Ga, e)
    }
    function Yi(e, t) {
        return Ga === null && Xa(e), _d(e, t)
    }
    function _d(e, t) {
        var l = t._currentValue
        if (((t = { context: t, memoizedValue: l, next: null }), Hl === null)) {
            if (e === null) throw Error(o(308))
            ;(Hl = t),
                (e.dependencies = { lanes: 0, firstContext: t }),
                (e.flags |= 524288)
        } else Hl = Hl.next = t
        return l
    }
    var ua = !1
    function kc(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        }
    }
    function Jc(e, t) {
        ;(e = e.updateQueue),
            t.updateQueue === e &&
                (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    callbacks: null,
                })
    }
    function ia(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null }
    }
    function ra(e, t, l) {
        var a = e.updateQueue
        if (a === null) return null
        if (((a = a.shared), (Fe & 2) !== 0)) {
            var u = a.pending
            return (
                u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
                (a.pending = t),
                (t = Si(e)),
                df(e, null, l),
                t
            )
        }
        return bi(e, a, t, l), Si(e)
    }
    function gu(e, t, l) {
        if (
            ((t = t.updateQueue),
            t !== null && ((t = t.shared), (l & 4194176) !== 0))
        ) {
            var a = t.lanes
            ;(a &= e.pendingLanes), (l |= a), (t.lanes = l), ie(e, l)
        }
    }
    function Fc(e, t) {
        var l = e.updateQueue,
            a = e.alternate
        if (a !== null && ((a = a.updateQueue), l === a)) {
            var u = null,
                r = null
            if (((l = l.firstBaseUpdate), l !== null)) {
                do {
                    var d = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null,
                    }
                    r === null ? (u = r = d) : (r = r.next = d), (l = l.next)
                } while (l !== null)
                r === null ? (u = r = t) : (r = r.next = t)
            } else u = r = t
            ;(l = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: r,
                shared: a.shared,
                callbacks: a.callbacks,
            }),
                (e.updateQueue = l)
            return
        }
        ;(e = l.lastBaseUpdate),
            e === null ? (l.firstBaseUpdate = t) : (e.next = t),
            (l.lastBaseUpdate = t)
    }
    var $c = !1
    function bu() {
        if ($c) {
            var e = En
            if (e !== null) throw e
        }
    }
    function Su(e, t, l, a) {
        $c = !1
        var u = e.updateQueue
        ua = !1
        var r = u.firstBaseUpdate,
            d = u.lastBaseUpdate,
            y = u.shared.pending
        if (y !== null) {
            u.shared.pending = null
            var b = y,
                T = b.next
            ;(b.next = null), d === null ? (r = T) : (d.next = T), (d = b)
            var G = e.alternate
            G !== null &&
                ((G = G.updateQueue),
                (y = G.lastBaseUpdate),
                y !== d &&
                    (y === null ? (G.firstBaseUpdate = T) : (y.next = T),
                    (G.lastBaseUpdate = b)))
        }
        if (r !== null) {
            var Q = u.baseState
            ;(d = 0), (G = T = b = null), (y = r)
            do {
                var N = y.lane & -536870913,
                    B = N !== y.lane
                if (B ? (Ce & N) === N : (a & N) === N) {
                    N !== 0 && N === Sn && ($c = !0),
                        G !== null &&
                            (G = G.next =
                                {
                                    lane: 0,
                                    tag: y.tag,
                                    payload: y.payload,
                                    callback: null,
                                    next: null,
                                })
                    e: {
                        var ue = e,
                            ge = y
                        N = t
                        var et = l
                        switch (ge.tag) {
                            case 1:
                                if (
                                    ((ue = ge.payload), typeof ue == 'function')
                                ) {
                                    Q = ue.call(et, Q, N)
                                    break e
                                }
                                Q = ue
                                break e
                            case 3:
                                ue.flags = (ue.flags & -65537) | 128
                            case 0:
                                if (
                                    ((ue = ge.payload),
                                    (N =
                                        typeof ue == 'function'
                                            ? ue.call(et, Q, N)
                                            : ue),
                                    N == null)
                                )
                                    break e
                                Q = fe({}, Q, N)
                                break e
                            case 2:
                                ua = !0
                        }
                    }
                    ;(N = y.callback),
                        N !== null &&
                            ((e.flags |= 64),
                            B && (e.flags |= 8192),
                            (B = u.callbacks),
                            B === null ? (u.callbacks = [N]) : B.push(N))
                } else
                    (B = {
                        lane: N,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null,
                    }),
                        G === null ? ((T = G = B), (b = Q)) : (G = G.next = B),
                        (d |= N)
                if (((y = y.next), y === null)) {
                    if (((y = u.shared.pending), y === null)) break
                    ;(B = y),
                        (y = B.next),
                        (B.next = null),
                        (u.lastBaseUpdate = B),
                        (u.shared.pending = null)
                }
            } while (!0)
            G === null && (b = Q),
                (u.baseState = b),
                (u.firstBaseUpdate = T),
                (u.lastBaseUpdate = G),
                r === null && (u.shared.lanes = 0),
                (da |= d),
                (e.lanes = d),
                (e.memoizedState = Q)
        }
    }
    function Ud(e, t) {
        if (typeof e != 'function') throw Error(o(191, e))
        e.call(t)
    }
    function zd(e, t) {
        var l = e.callbacks
        if (l !== null)
            for (e.callbacks = null, e = 0; e < l.length; e++) Ud(l[e], t)
    }
    function Eu(e, t) {
        try {
            var l = t.updateQueue,
                a = l !== null ? l.lastEffect : null
            if (a !== null) {
                var u = a.next
                l = u
                do {
                    if ((l.tag & e) === e) {
                        a = void 0
                        var r = l.create,
                            d = l.inst
                        ;(a = r()), (d.destroy = a)
                    }
                    l = l.next
                } while (l !== u)
            }
        } catch (y) {
            Ye(t, t.return, y)
        }
    }
    function ca(e, t, l) {
        try {
            var a = t.updateQueue,
                u = a !== null ? a.lastEffect : null
            if (u !== null) {
                var r = u.next
                a = r
                do {
                    if ((a.tag & e) === e) {
                        var d = a.inst,
                            y = d.destroy
                        if (y !== void 0) {
                            ;(d.destroy = void 0), (u = t)
                            var b = l
                            try {
                                y()
                            } catch (T) {
                                Ye(u, b, T)
                            }
                        }
                    }
                    a = a.next
                } while (a !== r)
            }
        } catch (T) {
            Ye(t, t.return, T)
        }
    }
    function Nd(e) {
        var t = e.updateQueue
        if (t !== null) {
            var l = e.stateNode
            try {
                zd(t, l)
            } catch (a) {
                Ye(e, e.return, a)
            }
        }
    }
    function jd(e, t, l) {
        ;(l.props = Ya(e.type, e.memoizedProps)), (l.state = e.memoizedState)
        try {
            l.componentWillUnmount()
        } catch (a) {
            Ye(e, t, a)
        }
    }
    function Va(e, t) {
        try {
            var l = e.ref
            if (l !== null) {
                var a = e.stateNode
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var u = a
                        break
                    default:
                        u = a
                }
                typeof l == 'function' ? (e.refCleanup = l(u)) : (l.current = u)
            }
        } catch (r) {
            Ye(e, t, r)
        }
    }
    function Lt(e, t) {
        var l = e.ref,
            a = e.refCleanup
        if (l !== null)
            if (typeof a == 'function')
                try {
                    a()
                } catch (u) {
                    Ye(e, t, u)
                } finally {
                    ;(e.refCleanup = null),
                        (e = e.alternate),
                        e != null && (e.refCleanup = null)
                }
            else if (typeof l == 'function')
                try {
                    l(null)
                } catch (u) {
                    Ye(e, t, u)
                }
            else l.current = null
    }
    function Ld(e) {
        var t = e.type,
            l = e.memoizedProps,
            a = e.stateNode
        try {
            e: switch (t) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                    l.autoFocus && a.focus()
                    break e
                case 'img':
                    l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (u) {
            Ye(e, e.return, u)
        }
    }
    function Hd(e, t, l) {
        try {
            var a = e.stateNode
            nv(a, e.type, l, t), (a[de] = t)
        } catch (u) {
            Ye(e, e.return, u)
        }
    }
    function Bd(e) {
        return (
            e.tag === 5 ||
            e.tag === 3 ||
            e.tag === 26 ||
            e.tag === 27 ||
            e.tag === 4
        )
    }
    function Wc(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || Bd(e.return)) return null
                e = e.return
            }
            for (
                e.sibling.return = e.return, e = e.sibling;
                e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

            ) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e
                ;(e.child.return = e), (e = e.child)
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }
    function Pc(e, t, l) {
        var a = e.tag
        if (a === 5 || a === 6)
            (e = e.stateNode),
                t
                    ? l.nodeType === 8
                        ? l.parentNode.insertBefore(e, t)
                        : l.insertBefore(e, t)
                    : (l.nodeType === 8
                          ? ((t = l.parentNode), t.insertBefore(e, l))
                          : ((t = l), t.appendChild(e)),
                      (l = l._reactRootContainer),
                      l != null || t.onclick !== null || (t.onclick = er))
        else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
            for (Pc(e, t, l), e = e.sibling; e !== null; )
                Pc(e, t, l), (e = e.sibling)
    }
    function Gi(e, t, l) {
        var a = e.tag
        if (a === 5 || a === 6)
            (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e)
        else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
            for (Gi(e, t, l), e = e.sibling; e !== null; )
                Gi(e, t, l), (e = e.sibling)
    }
    var ql = !1,
        Pe = !1,
        Ic = !1,
        qd = typeof WeakSet == 'function' ? WeakSet : Set,
        ft = null,
        Yd = !1
    function N0(e, t) {
        if (((e = e.containerInfo), (wo = rr), (e = lf(e)), tc(e))) {
            if ('selectionStart' in e)
                var l = { start: e.selectionStart, end: e.selectionEnd }
            else
                e: {
                    l = ((l = e.ownerDocument) && l.defaultView) || window
                    var a = l.getSelection && l.getSelection()
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode
                        var u = a.anchorOffset,
                            r = a.focusNode
                        a = a.focusOffset
                        try {
                            l.nodeType, r.nodeType
                        } catch {
                            l = null
                            break e
                        }
                        var d = 0,
                            y = -1,
                            b = -1,
                            T = 0,
                            G = 0,
                            Q = e,
                            N = null
                        t: for (;;) {
                            for (
                                var B;
                                Q !== l ||
                                    (u !== 0 && Q.nodeType !== 3) ||
                                    (y = d + u),
                                    Q !== r ||
                                        (a !== 0 && Q.nodeType !== 3) ||
                                        (b = d + a),
                                    Q.nodeType === 3 &&
                                        (d += Q.nodeValue.length),
                                    (B = Q.firstChild) !== null;

                            )
                                (N = Q), (Q = B)
                            for (;;) {
                                if (Q === e) break t
                                if (
                                    (N === l && ++T === u && (y = d),
                                    N === r && ++G === a && (b = d),
                                    (B = Q.nextSibling) !== null)
                                )
                                    break
                                ;(Q = N), (N = Q.parentNode)
                            }
                            Q = B
                        }
                        l = y === -1 || b === -1 ? null : { start: y, end: b }
                    } else l = null
                }
            l = l || { start: 0, end: 0 }
        } else l = null
        for (
            Mo = { focusedElem: e, selectionRange: l }, rr = !1, ft = t;
            ft !== null;

        )
            if (
                ((t = ft),
                (e = t.child),
                (t.subtreeFlags & 1028) !== 0 && e !== null)
            )
                (e.return = t), (ft = e)
            else
                for (; ft !== null; ) {
                    switch (
                        ((t = ft), (r = t.alternate), (e = t.flags), t.tag)
                    ) {
                        case 0:
                            break
                        case 11:
                        case 15:
                            break
                        case 1:
                            if ((e & 1024) !== 0 && r !== null) {
                                ;(e = void 0),
                                    (l = t),
                                    (u = r.memoizedProps),
                                    (r = r.memoizedState),
                                    (a = l.stateNode)
                                try {
                                    var ue = Ya(
                                        l.type,
                                        u,
                                        l.elementType === l.type,
                                    )
                                    ;(e = a.getSnapshotBeforeUpdate(ue, r)),
                                        (a.__reactInternalSnapshotBeforeUpdate =
                                            e)
                                } catch (ge) {
                                    Ye(l, l.return, ge)
                                }
                            }
                            break
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (
                                    ((e = t.stateNode.containerInfo),
                                    (l = e.nodeType),
                                    l === 9)
                                )
                                    zo(e)
                                else if (l === 1)
                                    switch (e.nodeName) {
                                        case 'HEAD':
                                        case 'HTML':
                                        case 'BODY':
                                            zo(e)
                                            break
                                        default:
                                            e.textContent = ''
                                    }
                            }
                            break
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break
                        default:
                            if ((e & 1024) !== 0) throw Error(o(163))
                    }
                    if (((e = t.sibling), e !== null)) {
                        ;(e.return = t.return), (ft = e)
                        break
                    }
                    ft = t.return
                }
        return (ue = Yd), (Yd = !1), ue
    }
    function Gd(e, t, l) {
        var a = l.flags
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                Gl(e, l), a & 4 && Eu(5, l)
                break
            case 1:
                if ((Gl(e, l), a & 4))
                    if (((e = l.stateNode), t === null))
                        try {
                            e.componentDidMount()
                        } catch (y) {
                            Ye(l, l.return, y)
                        }
                    else {
                        var u = Ya(l.type, t.memoizedProps)
                        t = t.memoizedState
                        try {
                            e.componentDidUpdate(
                                u,
                                t,
                                e.__reactInternalSnapshotBeforeUpdate,
                            )
                        } catch (y) {
                            Ye(l, l.return, y)
                        }
                    }
                a & 64 && Nd(l), a & 512 && Va(l, l.return)
                break
            case 3:
                if ((Gl(e, l), a & 64 && ((a = l.updateQueue), a !== null))) {
                    if (((e = null), l.child !== null))
                        switch (l.child.tag) {
                            case 27:
                            case 5:
                                e = l.child.stateNode
                                break
                            case 1:
                                e = l.child.stateNode
                        }
                    try {
                        zd(a, e)
                    } catch (y) {
                        Ye(l, l.return, y)
                    }
                }
                break
            case 26:
                Gl(e, l), a & 512 && Va(l, l.return)
                break
            case 27:
            case 5:
                Gl(e, l),
                    t === null && a & 4 && Ld(l),
                    a & 512 && Va(l, l.return)
                break
            case 12:
                Gl(e, l)
                break
            case 13:
                Gl(e, l), a & 4 && Qd(e, l)
                break
            case 22:
                if (((u = l.memoizedState !== null || ql), !u)) {
                    t = (t !== null && t.memoizedState !== null) || Pe
                    var r = ql,
                        d = Pe
                    ;(ql = u),
                        (Pe = t) && !d
                            ? oa(e, l, (l.subtreeFlags & 8772) !== 0)
                            : Gl(e, l),
                        (ql = r),
                        (Pe = d)
                }
                a & 512 &&
                    (l.memoizedProps.mode === 'manual'
                        ? Va(l, l.return)
                        : Lt(l, l.return))
                break
            default:
                Gl(e, l)
        }
    }
    function Xd(e) {
        var t = e.alternate
        t !== null && ((e.alternate = null), Xd(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 && ((t = e.stateNode), t !== null && wl(t)),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null)
    }
    var ut = null,
        Ht = !1
    function Yl(e, t, l) {
        for (l = l.child; l !== null; ) Vd(e, t, l), (l = l.sibling)
    }
    function Vd(e, t, l) {
        if (Rt && typeof Rt.onCommitFiberUnmount == 'function')
            try {
                Rt.onCommitFiberUnmount(Wl, l)
            } catch {}
        switch (l.tag) {
            case 26:
                Pe || Lt(l, t),
                    Yl(e, t, l),
                    l.memoizedState
                        ? l.memoizedState.count--
                        : l.stateNode &&
                          ((l = l.stateNode), l.parentNode.removeChild(l))
                break
            case 27:
                Pe || Lt(l, t)
                var a = ut,
                    u = Ht
                for (
                    ut = l.stateNode,
                        Yl(e, t, l),
                        l = l.stateNode,
                        t = l.attributes;
                    t.length;

                )
                    l.removeAttributeNode(t[0])
                wl(l), (ut = a), (Ht = u)
                break
            case 5:
                Pe || Lt(l, t)
            case 6:
                u = ut
                var r = Ht
                if (((ut = null), Yl(e, t, l), (ut = u), (Ht = r), ut !== null))
                    if (Ht)
                        try {
                            ;(e = ut),
                                (a = l.stateNode),
                                e.nodeType === 8
                                    ? e.parentNode.removeChild(a)
                                    : e.removeChild(a)
                        } catch (d) {
                            Ye(l, t, d)
                        }
                    else
                        try {
                            ut.removeChild(l.stateNode)
                        } catch (d) {
                            Ye(l, t, d)
                        }
                break
            case 18:
                ut !== null &&
                    (Ht
                        ? ((t = ut),
                          (l = l.stateNode),
                          t.nodeType === 8
                              ? Uo(t.parentNode, l)
                              : t.nodeType === 1 && Uo(t, l),
                          qu(t))
                        : Uo(ut, l.stateNode))
                break
            case 4:
                ;(a = ut),
                    (u = Ht),
                    (ut = l.stateNode.containerInfo),
                    (Ht = !0),
                    Yl(e, t, l),
                    (ut = a),
                    (Ht = u)
                break
            case 0:
            case 11:
            case 14:
            case 15:
                Pe || ca(2, l, t), Pe || ca(4, l, t), Yl(e, t, l)
                break
            case 1:
                Pe ||
                    (Lt(l, t),
                    (a = l.stateNode),
                    typeof a.componentWillUnmount == 'function' && jd(l, t, a)),
                    Yl(e, t, l)
                break
            case 21:
                Yl(e, t, l)
                break
            case 22:
                Pe || Lt(l, t),
                    (Pe = (a = Pe) || l.memoizedState !== null),
                    Yl(e, t, l),
                    (Pe = a)
                break
            default:
                Yl(e, t, l)
        }
    }
    function Qd(e, t) {
        if (
            t.memoizedState === null &&
            ((e = t.alternate),
            e !== null &&
                ((e = e.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)))
        )
            try {
                qu(e)
            } catch (l) {
                Ye(t, t.return, l)
            }
    }
    function j0(e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode
                return t === null && (t = e.stateNode = new qd()), t
            case 22:
                return (
                    (e = e.stateNode),
                    (t = e._retryCache),
                    t === null && (t = e._retryCache = new qd()),
                    t
                )
            default:
                throw Error(o(435, e.tag))
        }
    }
    function eo(e, t) {
        var l = j0(e)
        t.forEach(function (a) {
            var u = J0.bind(null, e, a)
            l.has(a) || (l.add(a), a.then(u, u))
        })
    }
    function It(e, t) {
        var l = t.deletions
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var u = l[a],
                    r = e,
                    d = t,
                    y = d
                e: for (; y !== null; ) {
                    switch (y.tag) {
                        case 27:
                        case 5:
                            ;(ut = y.stateNode), (Ht = !1)
                            break e
                        case 3:
                            ;(ut = y.stateNode.containerInfo), (Ht = !0)
                            break e
                        case 4:
                            ;(ut = y.stateNode.containerInfo), (Ht = !0)
                            break e
                    }
                    y = y.return
                }
                if (ut === null) throw Error(o(160))
                Vd(r, d, u),
                    (ut = null),
                    (Ht = !1),
                    (r = u.alternate),
                    r !== null && (r.return = null),
                    (u.return = null)
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; ) Zd(t, e), (t = t.sibling)
    }
    var ol = null
    function Zd(e, t) {
        var l = e.alternate,
            a = e.flags
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                It(t, e),
                    el(e),
                    a & 4 && (ca(3, e, e.return), Eu(3, e), ca(5, e, e.return))
                break
            case 1:
                It(t, e),
                    el(e),
                    a & 512 && (Pe || l === null || Lt(l, l.return)),
                    a & 64 &&
                        ql &&
                        ((e = e.updateQueue),
                        e !== null &&
                            ((a = e.callbacks),
                            a !== null &&
                                ((l = e.shared.hiddenCallbacks),
                                (e.shared.hiddenCallbacks =
                                    l === null ? a : l.concat(a)))))
                break
            case 26:
                var u = ol
                if (
                    (It(t, e),
                    el(e),
                    a & 512 && (Pe || l === null || Lt(l, l.return)),
                    a & 4)
                ) {
                    var r = l !== null ? l.memoizedState : null
                    if (((a = e.memoizedState), l === null))
                        if (a === null)
                            if (e.stateNode === null) {
                                e: {
                                    ;(a = e.type),
                                        (l = e.memoizedProps),
                                        (u = u.ownerDocument || u)
                                    t: switch (a) {
                                        case 'title':
                                            ;(r =
                                                u.getElementsByTagName(
                                                    'title',
                                                )[0]),
                                                (!r ||
                                                    r[Qt] ||
                                                    r[ne] ||
                                                    r.namespaceURI ===
                                                        'http://www.w3.org/2000/svg' ||
                                                    r.hasAttribute(
                                                        'itemprop',
                                                    )) &&
                                                    ((r = u.createElement(a)),
                                                    u.head.insertBefore(
                                                        r,
                                                        u.querySelector(
                                                            'head > title',
                                                        ),
                                                    )),
                                                St(r, a, l),
                                                (r[ne] = e),
                                                Ge(r),
                                                (a = r)
                                            break e
                                        case 'link':
                                            var d = Lh('link', 'href', u).get(
                                                a + (l.href || ''),
                                            )
                                            if (d) {
                                                for (
                                                    var y = 0;
                                                    y < d.length;
                                                    y++
                                                )
                                                    if (
                                                        ((r = d[y]),
                                                        r.getAttribute(
                                                            'href',
                                                        ) ===
                                                            (l.href == null
                                                                ? null
                                                                : l.href) &&
                                                            r.getAttribute(
                                                                'rel',
                                                            ) ===
                                                                (l.rel == null
                                                                    ? null
                                                                    : l.rel) &&
                                                            r.getAttribute(
                                                                'title',
                                                            ) ===
                                                                (l.title == null
                                                                    ? null
                                                                    : l.title) &&
                                                            r.getAttribute(
                                                                'crossorigin',
                                                            ) ===
                                                                (l.crossOrigin ==
                                                                null
                                                                    ? null
                                                                    : l.crossOrigin))
                                                    ) {
                                                        d.splice(y, 1)
                                                        break t
                                                    }
                                            }
                                            ;(r = u.createElement(a)),
                                                St(r, a, l),
                                                u.head.appendChild(r)
                                            break
                                        case 'meta':
                                            if (
                                                (d = Lh(
                                                    'meta',
                                                    'content',
                                                    u,
                                                ).get(a + (l.content || '')))
                                            ) {
                                                for (y = 0; y < d.length; y++)
                                                    if (
                                                        ((r = d[y]),
                                                        r.getAttribute(
                                                            'content',
                                                        ) ===
                                                            (l.content == null
                                                                ? null
                                                                : '' +
                                                                  l.content) &&
                                                            r.getAttribute(
                                                                'name',
                                                            ) ===
                                                                (l.name == null
                                                                    ? null
                                                                    : l.name) &&
                                                            r.getAttribute(
                                                                'property',
                                                            ) ===
                                                                (l.property ==
                                                                null
                                                                    ? null
                                                                    : l.property) &&
                                                            r.getAttribute(
                                                                'http-equiv',
                                                            ) ===
                                                                (l.httpEquiv ==
                                                                null
                                                                    ? null
                                                                    : l.httpEquiv) &&
                                                            r.getAttribute(
                                                                'charset',
                                                            ) ===
                                                                (l.charSet ==
                                                                null
                                                                    ? null
                                                                    : l.charSet))
                                                    ) {
                                                        d.splice(y, 1)
                                                        break t
                                                    }
                                            }
                                            ;(r = u.createElement(a)),
                                                St(r, a, l),
                                                u.head.appendChild(r)
                                            break
                                        default:
                                            throw Error(o(468, a))
                                    }
                                    ;(r[ne] = e), Ge(r), (a = r)
                                }
                                e.stateNode = a
                            } else Hh(u, e.type, e.stateNode)
                        else e.stateNode = jh(u, a, e.memoizedProps)
                    else
                        r !== a
                            ? (r === null
                                  ? l.stateNode !== null &&
                                    ((l = l.stateNode),
                                    l.parentNode.removeChild(l))
                                  : r.count--,
                              a === null
                                  ? Hh(u, e.type, e.stateNode)
                                  : jh(u, a, e.memoizedProps))
                            : a === null &&
                              e.stateNode !== null &&
                              Hd(e, e.memoizedProps, l.memoizedProps)
                }
                break
            case 27:
                if (a & 4 && e.alternate === null) {
                    ;(u = e.stateNode), (r = e.memoizedProps)
                    try {
                        for (var b = u.firstChild; b; ) {
                            var T = b.nextSibling,
                                G = b.nodeName
                            b[Qt] ||
                                G === 'HEAD' ||
                                G === 'BODY' ||
                                G === 'SCRIPT' ||
                                G === 'STYLE' ||
                                (G === 'LINK' &&
                                    b.rel.toLowerCase() === 'stylesheet') ||
                                u.removeChild(b),
                                (b = T)
                        }
                        for (var Q = e.type, N = u.attributes; N.length; )
                            u.removeAttributeNode(N[0])
                        St(u, Q, r), (u[ne] = e), (u[de] = r)
                    } catch (ue) {
                        Ye(e, e.return, ue)
                    }
                }
            case 5:
                if (
                    (It(t, e),
                    el(e),
                    a & 512 && (Pe || l === null || Lt(l, l.return)),
                    e.flags & 32)
                ) {
                    u = e.stateNode
                    try {
                        cn(u, '')
                    } catch (ue) {
                        Ye(e, e.return, ue)
                    }
                }
                a & 4 &&
                    e.stateNode != null &&
                    ((u = e.memoizedProps),
                    Hd(e, u, l !== null ? l.memoizedProps : u)),
                    a & 1024 && (Ic = !0)
                break
            case 6:
                if ((It(t, e), el(e), a & 4)) {
                    if (e.stateNode === null) throw Error(o(162))
                    ;(a = e.memoizedProps), (l = e.stateNode)
                    try {
                        l.nodeValue = a
                    } catch (ue) {
                        Ye(e, e.return, ue)
                    }
                }
                break
            case 3:
                if (
                    ((nr = null),
                    (u = ol),
                    (ol = lr(t.containerInfo)),
                    It(t, e),
                    (ol = u),
                    el(e),
                    a & 4 && l !== null && l.memoizedState.isDehydrated)
                )
                    try {
                        qu(t.containerInfo)
                    } catch (ue) {
                        Ye(e, e.return, ue)
                    }
                Ic && ((Ic = !1), Kd(e))
                break
            case 4:
                ;(a = ol),
                    (ol = lr(e.stateNode.containerInfo)),
                    It(t, e),
                    el(e),
                    (ol = a)
                break
            case 12:
                It(t, e), el(e)
                break
            case 13:
                It(t, e),
                    el(e),
                    e.child.flags & 8192 &&
                        (e.memoizedState !== null) !=
                            (l !== null && l.memoizedState !== null) &&
                        (oo = Nt()),
                    a & 4 &&
                        ((a = e.updateQueue),
                        a !== null && ((e.updateQueue = null), eo(e, a)))
                break
            case 22:
                if (
                    (a & 512 && (Pe || l === null || Lt(l, l.return)),
                    (b = e.memoizedState !== null),
                    (T = l !== null && l.memoizedState !== null),
                    (G = ql),
                    (Q = Pe),
                    (ql = G || b),
                    (Pe = Q || T),
                    It(t, e),
                    (Pe = Q),
                    (ql = G),
                    el(e),
                    (t = e.stateNode),
                    (t._current = e),
                    (t._visibility &= -3),
                    (t._visibility |= t._pendingVisibility & 2),
                    a & 8192 &&
                        ((t._visibility = b
                            ? t._visibility & -2
                            : t._visibility | 1),
                        b && ((t = ql || Pe), l === null || T || t || An(e)),
                        e.memoizedProps === null ||
                            e.memoizedProps.mode !== 'manual'))
                )
                    e: for (l = null, t = e; ; ) {
                        if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
                            if (l === null) {
                                T = l = t
                                try {
                                    if (((u = T.stateNode), b))
                                        (r = u.style),
                                            typeof r.setProperty == 'function'
                                                ? r.setProperty(
                                                      'display',
                                                      'none',
                                                      'important',
                                                  )
                                                : (r.display = 'none')
                                    else {
                                        ;(d = T.stateNode),
                                            (y = T.memoizedProps.style)
                                        var B =
                                            y != null &&
                                            y.hasOwnProperty('display')
                                                ? y.display
                                                : null
                                        d.style.display =
                                            B == null || typeof B == 'boolean'
                                                ? ''
                                                : ('' + B).trim()
                                    }
                                } catch (ue) {
                                    Ye(T, T.return, ue)
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                T = t
                                try {
                                    T.stateNode.nodeValue = b
                                        ? ''
                                        : T.memoizedProps
                                } catch (ue) {
                                    Ye(T, T.return, ue)
                                }
                            }
                        } else if (
                            ((t.tag !== 22 && t.tag !== 23) ||
                                t.memoizedState === null ||
                                t === e) &&
                            t.child !== null
                        ) {
                            ;(t.child.return = t), (t = t.child)
                            continue
                        }
                        if (t === e) break e
                        for (; t.sibling === null; ) {
                            if (t.return === null || t.return === e) break e
                            l === t && (l = null), (t = t.return)
                        }
                        l === t && (l = null),
                            (t.sibling.return = t.return),
                            (t = t.sibling)
                    }
                a & 4 &&
                    ((a = e.updateQueue),
                    a !== null &&
                        ((l = a.retryQueue),
                        l !== null && ((a.retryQueue = null), eo(e, l))))
                break
            case 19:
                It(t, e),
                    el(e),
                    a & 4 &&
                        ((a = e.updateQueue),
                        a !== null && ((e.updateQueue = null), eo(e, a)))
                break
            case 21:
                break
            default:
                It(t, e), el(e)
        }
    }
    function el(e) {
        var t = e.flags
        if (t & 2) {
            try {
                if (e.tag !== 27) {
                    e: {
                        for (var l = e.return; l !== null; ) {
                            if (Bd(l)) {
                                var a = l
                                break e
                            }
                            l = l.return
                        }
                        throw Error(o(160))
                    }
                    switch (a.tag) {
                        case 27:
                            var u = a.stateNode,
                                r = Wc(e)
                            Gi(e, r, u)
                            break
                        case 5:
                            var d = a.stateNode
                            a.flags & 32 && (cn(d, ''), (a.flags &= -33))
                            var y = Wc(e)
                            Gi(e, y, d)
                            break
                        case 3:
                        case 4:
                            var b = a.stateNode.containerInfo,
                                T = Wc(e)
                            Pc(e, T, b)
                            break
                        default:
                            throw Error(o(161))
                    }
                }
            } catch (G) {
                Ye(e, e.return, G)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function Kd(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e
                Kd(t),
                    t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                    (e = e.sibling)
            }
    }
    function Gl(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                Gd(e, t.alternate, t), (t = t.sibling)
    }
    function An(e) {
        for (e = e.child; e !== null; ) {
            var t = e
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ca(4, t, t.return), An(t)
                    break
                case 1:
                    Lt(t, t.return)
                    var l = t.stateNode
                    typeof l.componentWillUnmount == 'function' &&
                        jd(t, t.return, l),
                        An(t)
                    break
                case 26:
                case 27:
                case 5:
                    Lt(t, t.return), An(t)
                    break
                case 22:
                    Lt(t, t.return), t.memoizedState === null && An(t)
                    break
                default:
                    An(t)
            }
            e = e.sibling
        }
    }
    function oa(e, t, l) {
        for (
            l = l && (t.subtreeFlags & 8772) !== 0, t = t.child;
            t !== null;

        ) {
            var a = t.alternate,
                u = e,
                r = t,
                d = r.flags
            switch (r.tag) {
                case 0:
                case 11:
                case 15:
                    oa(u, r, l), Eu(4, r)
                    break
                case 1:
                    if (
                        (oa(u, r, l),
                        (a = r),
                        (u = a.stateNode),
                        typeof u.componentDidMount == 'function')
                    )
                        try {
                            u.componentDidMount()
                        } catch (T) {
                            Ye(a, a.return, T)
                        }
                    if (((a = r), (u = a.updateQueue), u !== null)) {
                        var y = a.stateNode
                        try {
                            var b = u.shared.hiddenCallbacks
                            if (b !== null)
                                for (
                                    u.shared.hiddenCallbacks = null, u = 0;
                                    u < b.length;
                                    u++
                                )
                                    Ud(b[u], y)
                        } catch (T) {
                            Ye(a, a.return, T)
                        }
                    }
                    l && d & 64 && Nd(r), Va(r, r.return)
                    break
                case 26:
                case 27:
                case 5:
                    oa(u, r, l),
                        l && a === null && d & 4 && Ld(r),
                        Va(r, r.return)
                    break
                case 12:
                    oa(u, r, l)
                    break
                case 13:
                    oa(u, r, l), l && d & 4 && Qd(u, r)
                    break
                case 22:
                    r.memoizedState === null && oa(u, r, l), Va(r, r.return)
                    break
                default:
                    oa(u, r, l)
            }
            t = t.sibling
        }
    }
    function to(e, t) {
        var l = null
        e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
            (e = null),
            t.memoizedState !== null &&
                t.memoizedState.cachePool !== null &&
                (e = t.memoizedState.cachePool.pool),
            e !== l && (e != null && e.refCount++, l != null && fu(l))
    }
    function lo(e, t) {
        ;(e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && fu(e))
    }
    function sa(e, t, l, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) kd(e, t, l, a), (t = t.sibling)
    }
    function kd(e, t, l, a) {
        var u = t.flags
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                sa(e, t, l, a), u & 2048 && Eu(9, t)
                break
            case 3:
                sa(e, t, l, a),
                    u & 2048 &&
                        ((e = null),
                        t.alternate !== null &&
                            (e = t.alternate.memoizedState.cache),
                        (t = t.memoizedState.cache),
                        t !== e && (t.refCount++, e != null && fu(e)))
                break
            case 12:
                if (u & 2048) {
                    sa(e, t, l, a), (e = t.stateNode)
                    try {
                        var r = t.memoizedProps,
                            d = r.id,
                            y = r.onPostCommit
                        typeof y == 'function' &&
                            y(
                                d,
                                t.alternate === null ? 'mount' : 'update',
                                e.passiveEffectDuration,
                                -0,
                            )
                    } catch (b) {
                        Ye(t, t.return, b)
                    }
                } else sa(e, t, l, a)
                break
            case 23:
                break
            case 22:
                ;(r = t.stateNode),
                    t.memoizedState !== null
                        ? r._visibility & 4
                            ? sa(e, t, l, a)
                            : Ru(e, t)
                        : r._visibility & 4
                          ? sa(e, t, l, a)
                          : ((r._visibility |= 4),
                            On(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
                    u & 2048 && to(t.alternate, t)
                break
            case 24:
                sa(e, t, l, a), u & 2048 && lo(t.alternate, t)
                break
            default:
                sa(e, t, l, a)
        }
    }
    function On(e, t, l, a, u) {
        for (
            u = u && (t.subtreeFlags & 10256) !== 0, t = t.child;
            t !== null;

        ) {
            var r = e,
                d = t,
                y = l,
                b = a,
                T = d.flags
            switch (d.tag) {
                case 0:
                case 11:
                case 15:
                    On(r, d, y, b, u), Eu(8, d)
                    break
                case 23:
                    break
                case 22:
                    var G = d.stateNode
                    d.memoizedState !== null
                        ? G._visibility & 4
                            ? On(r, d, y, b, u)
                            : Ru(r, d)
                        : ((G._visibility |= 4), On(r, d, y, b, u)),
                        u && T & 2048 && to(d.alternate, d)
                    break
                case 24:
                    On(r, d, y, b, u), u && T & 2048 && lo(d.alternate, d)
                    break
                default:
                    On(r, d, y, b, u)
            }
            t = t.sibling
        }
    }
    function Ru(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var l = e,
                    a = t,
                    u = a.flags
                switch (a.tag) {
                    case 22:
                        Ru(l, a), u & 2048 && to(a.alternate, a)
                        break
                    case 24:
                        Ru(l, a), u & 2048 && lo(a.alternate, a)
                        break
                    default:
                        Ru(l, a)
                }
                t = t.sibling
            }
    }
    var Tu = 8192
    function Dn(e) {
        if (e.subtreeFlags & Tu)
            for (e = e.child; e !== null; ) Jd(e), (e = e.sibling)
    }
    function Jd(e) {
        switch (e.tag) {
            case 26:
                Dn(e),
                    e.flags & Tu &&
                        e.memoizedState !== null &&
                        Tv(ol, e.memoizedState, e.memoizedProps)
                break
            case 5:
                Dn(e)
                break
            case 3:
            case 4:
                var t = ol
                ;(ol = lr(e.stateNode.containerInfo)), Dn(e), (ol = t)
                break
            case 22:
                e.memoizedState === null &&
                    ((t = e.alternate),
                    t !== null && t.memoizedState !== null
                        ? ((t = Tu), (Tu = 16777216), Dn(e), (Tu = t))
                        : Dn(e))
                break
            default:
                Dn(e)
        }
    }
    function Fd(e) {
        var t = e.alternate
        if (t !== null && ((e = t.child), e !== null)) {
            t.child = null
            do (t = e.sibling), (e.sibling = null), (e = t)
            while (e !== null)
        }
    }
    function xu(e) {
        var t = e.deletions
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l]
                    ;(ft = a), Wd(a, e)
                }
            Fd(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) $d(e), (e = e.sibling)
    }
    function $d(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                xu(e), e.flags & 2048 && ca(9, e, e.return)
                break
            case 3:
                xu(e)
                break
            case 12:
                xu(e)
                break
            case 22:
                var t = e.stateNode
                e.memoizedState !== null &&
                t._visibility & 4 &&
                (e.return === null || e.return.tag !== 13)
                    ? ((t._visibility &= -5), Xi(e))
                    : xu(e)
                break
            default:
                xu(e)
        }
    }
    function Xi(e) {
        var t = e.deletions
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l]
                    ;(ft = a), Wd(a, e)
                }
            Fd(e)
        }
        for (e = e.child; e !== null; ) {
            switch (((t = e), t.tag)) {
                case 0:
                case 11:
                case 15:
                    ca(8, t, t.return), Xi(t)
                    break
                case 22:
                    ;(l = t.stateNode),
                        l._visibility & 4 && ((l._visibility &= -5), Xi(t))
                    break
                default:
                    Xi(t)
            }
            e = e.sibling
        }
    }
    function Wd(e, t) {
        for (; ft !== null; ) {
            var l = ft
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    ca(8, l, t)
                    break
                case 23:
                case 22:
                    if (
                        l.memoizedState !== null &&
                        l.memoizedState.cachePool !== null
                    ) {
                        var a = l.memoizedState.cachePool.pool
                        a != null && a.refCount++
                    }
                    break
                case 24:
                    fu(l.memoizedState.cache)
            }
            if (((a = l.child), a !== null)) (a.return = l), (ft = a)
            else
                e: for (l = e; ft !== null; ) {
                    a = ft
                    var u = a.sibling,
                        r = a.return
                    if ((Xd(a), a === l)) {
                        ft = null
                        break e
                    }
                    if (u !== null) {
                        ;(u.return = r), (ft = u)
                        break e
                    }
                    ft = r
                }
        }
    }
    function L0(e, t, l, a) {
        ;(this.tag = e),
            (this.key = l),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                    null),
            (this.mode = a),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null)
    }
    function tl(e, t, l, a) {
        return new L0(e, t, l, a)
    }
    function ao(e) {
        return (e = e.prototype), !(!e || !e.isReactComponent)
    }
    function fa(e, t) {
        var l = e.alternate
        return (
            l === null
                ? ((l = tl(e.tag, t, e.key, e.mode)),
                  (l.elementType = e.elementType),
                  (l.type = e.type),
                  (l.stateNode = e.stateNode),
                  (l.alternate = e),
                  (e.alternate = l))
                : ((l.pendingProps = t),
                  (l.type = e.type),
                  (l.flags = 0),
                  (l.subtreeFlags = 0),
                  (l.deletions = null)),
            (l.flags = e.flags & 31457280),
            (l.childLanes = e.childLanes),
            (l.lanes = e.lanes),
            (l.child = e.child),
            (l.memoizedProps = e.memoizedProps),
            (l.memoizedState = e.memoizedState),
            (l.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (l.dependencies =
                t === null
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext }),
            (l.sibling = e.sibling),
            (l.index = e.index),
            (l.ref = e.ref),
            (l.refCleanup = e.refCleanup),
            l
        )
    }
    function Pd(e, t) {
        e.flags &= 31457282
        var l = e.alternate
        return (
            l === null
                ? ((e.childLanes = 0),
                  (e.lanes = t),
                  (e.child = null),
                  (e.subtreeFlags = 0),
                  (e.memoizedProps = null),
                  (e.memoizedState = null),
                  (e.updateQueue = null),
                  (e.dependencies = null),
                  (e.stateNode = null))
                : ((e.childLanes = l.childLanes),
                  (e.lanes = l.lanes),
                  (e.child = l.child),
                  (e.subtreeFlags = 0),
                  (e.deletions = null),
                  (e.memoizedProps = l.memoizedProps),
                  (e.memoizedState = l.memoizedState),
                  (e.updateQueue = l.updateQueue),
                  (e.type = l.type),
                  (t = l.dependencies),
                  (e.dependencies =
                      t === null
                          ? null
                          : { lanes: t.lanes, firstContext: t.firstContext })),
            e
        )
    }
    function Vi(e, t, l, a, u, r) {
        var d = 0
        if (((a = e), typeof e == 'function')) ao(e) && (d = 1)
        else if (typeof e == 'string')
            d = Ev(e, l, yt.current)
                ? 26
                : e === 'html' || e === 'head' || e === 'body'
                  ? 27
                  : 5
        else
            e: switch (e) {
                case p:
                    return Qa(l.children, u, r, t)
                case m:
                    ;(d = 8), (u |= 24)
                    break
                case g:
                    return (
                        (e = tl(12, l, t, u | 2)),
                        (e.elementType = g),
                        (e.lanes = r),
                        e
                    )
                case Y:
                    return (
                        (e = tl(13, l, t, u)),
                        (e.elementType = Y),
                        (e.lanes = r),
                        e
                    )
                case z:
                    return (
                        (e = tl(19, l, t, u)),
                        (e.elementType = z),
                        (e.lanes = r),
                        e
                    )
                case $:
                    return Id(l, u, r, t)
                default:
                    if (typeof e == 'object' && e !== null)
                        switch (e.$$typeof) {
                            case x:
                            case D:
                                d = 10
                                break e
                            case O:
                                d = 9
                                break e
                            case A:
                                d = 11
                                break e
                            case q:
                                d = 14
                                break e
                            case V:
                                ;(d = 16), (a = null)
                                break e
                        }
                    ;(d = 29),
                        (l = Error(o(130, e === null ? 'null' : typeof e, ''))),
                        (a = null)
            }
        return (
            (t = tl(d, l, t, u)),
            (t.elementType = e),
            (t.type = a),
            (t.lanes = r),
            t
        )
    }
    function Qa(e, t, l, a) {
        return (e = tl(7, e, a, t)), (e.lanes = l), e
    }
    function Id(e, t, l, a) {
        ;(e = tl(22, e, a, t)), (e.elementType = $), (e.lanes = l)
        var u = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function () {
                var r = u._current
                if (r === null) throw Error(o(456))
                if ((u._pendingVisibility & 2) === 0) {
                    var d = Il(r, 2)
                    d !== null && ((u._pendingVisibility |= 2), Mt(d, r, 2))
                }
            },
            attach: function () {
                var r = u._current
                if (r === null) throw Error(o(456))
                if ((u._pendingVisibility & 2) !== 0) {
                    var d = Il(r, 2)
                    d !== null && ((u._pendingVisibility &= -3), Mt(d, r, 2))
                }
            },
        }
        return (e.stateNode = u), e
    }
    function no(e, t, l) {
        return (e = tl(6, e, null, t)), (e.lanes = l), e
    }
    function uo(e, t, l) {
        return (
            (t = tl(4, e.children !== null ? e.children : [], e.key, t)),
            (t.lanes = l),
            (t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
            }),
            t
        )
    }
    function Xl(e) {
        e.flags |= 4
    }
    function eh(e, t) {
        if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
            e.flags &= -16777217
        else if (((e.flags |= 16777216), !Bh(t))) {
            if (
                ((t = Pt.current),
                t !== null &&
                    ((Ce & 4194176) === Ce
                        ? bl !== null
                        : ((Ce & 62914560) !== Ce && (Ce & 536870912) === 0) ||
                          t !== bl))
            )
                throw ((cu = sc), pf)
            e.flags |= 8192
        }
    }
    function Qi(e, t) {
        t !== null && (e.flags |= 4),
            e.flags & 16384 &&
                ((t = e.tag !== 22 ? E() : 536870912),
                (e.lanes |= t),
                (Mn |= t))
    }
    function Au(e, t) {
        if (!ze)
            switch (e.tailMode) {
                case 'hidden':
                    t = e.tail
                    for (var l = null; t !== null; )
                        t.alternate !== null && (l = t), (t = t.sibling)
                    l === null ? (e.tail = null) : (l.sibling = null)
                    break
                case 'collapsed':
                    l = e.tail
                    for (var a = null; l !== null; )
                        l.alternate !== null && (a = l), (l = l.sibling)
                    a === null
                        ? t || e.tail === null
                            ? (e.tail = null)
                            : (e.tail.sibling = null)
                        : (a.sibling = null)
            }
    }
    function Je(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            l = 0,
            a = 0
        if (t)
            for (var u = e.child; u !== null; )
                (l |= u.lanes | u.childLanes),
                    (a |= u.subtreeFlags & 31457280),
                    (a |= u.flags & 31457280),
                    (u.return = e),
                    (u = u.sibling)
        else
            for (u = e.child; u !== null; )
                (l |= u.lanes | u.childLanes),
                    (a |= u.subtreeFlags),
                    (a |= u.flags),
                    (u.return = e),
                    (u = u.sibling)
        return (e.subtreeFlags |= a), (e.childLanes = l), t
    }
    function H0(e, t, l) {
        var a = t.pendingProps
        switch ((cc(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Je(t), null
            case 1:
                return Je(t), null
            case 3:
                return (
                    (l = t.stateNode),
                    (a = null),
                    e !== null && (a = e.memoizedState.cache),
                    t.memoizedState.cache !== a && (t.flags |= 2048),
                    Bl(ct),
                    $l(),
                    l.pendingContext &&
                        ((l.context = l.pendingContext),
                        (l.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (nu(t)
                            ? Xl(t)
                            : e === null ||
                              (e.memoizedState.isDehydrated &&
                                  (t.flags & 256) === 0) ||
                              ((t.flags |= 1024),
                              cl !== null && (mo(cl), (cl = null)))),
                    Je(t),
                    null
                )
            case 26:
                return (
                    (l = t.memoizedState),
                    e === null
                        ? (Xl(t),
                          l !== null
                              ? (Je(t), eh(t, l))
                              : (Je(t), (t.flags &= -16777217)))
                        : l
                          ? l !== e.memoizedState
                              ? (Xl(t), Je(t), eh(t, l))
                              : (Je(t), (t.flags &= -16777217))
                          : (e.memoizedProps !== a && Xl(t),
                            Je(t),
                            (t.flags &= -16777217)),
                    null
                )
            case 27:
                an(t), (l = ml.current)
                var u = t.type
                if (e !== null && t.stateNode != null)
                    e.memoizedProps !== a && Xl(t)
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(o(166))
                        return Je(t), null
                    }
                    ;(e = yt.current),
                        nu(t)
                            ? yf(t)
                            : ((e = Ch(u, a, l)), (t.stateNode = e), Xl(t))
                }
                return Je(t), null
            case 5:
                if ((an(t), (l = t.type), e !== null && t.stateNode != null))
                    e.memoizedProps !== a && Xl(t)
                else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(o(166))
                        return Je(t), null
                    }
                    if (((e = yt.current), nu(t))) yf(t)
                    else {
                        switch (((u = tr(ml.current)), e)) {
                            case 1:
                                e = u.createElementNS(
                                    'http://www.w3.org/2000/svg',
                                    l,
                                )
                                break
                            case 2:
                                e = u.createElementNS(
                                    'http://www.w3.org/1998/Math/MathML',
                                    l,
                                )
                                break
                            default:
                                switch (l) {
                                    case 'svg':
                                        e = u.createElementNS(
                                            'http://www.w3.org/2000/svg',
                                            l,
                                        )
                                        break
                                    case 'math':
                                        e = u.createElementNS(
                                            'http://www.w3.org/1998/Math/MathML',
                                            l,
                                        )
                                        break
                                    case 'script':
                                        ;(e = u.createElement('div')),
                                            (e.innerHTML =
                                                '<script><\/script>'),
                                            (e = e.removeChild(e.firstChild))
                                        break
                                    case 'select':
                                        ;(e =
                                            typeof a.is == 'string'
                                                ? u.createElement('select', {
                                                      is: a.is,
                                                  })
                                                : u.createElement('select')),
                                            a.multiple
                                                ? (e.multiple = !0)
                                                : a.size && (e.size = a.size)
                                        break
                                    default:
                                        e =
                                            typeof a.is == 'string'
                                                ? u.createElement(l, {
                                                      is: a.is,
                                                  })
                                                : u.createElement(l)
                                }
                        }
                        ;(e[ne] = t), (e[de] = a)
                        e: for (u = t.child; u !== null; ) {
                            if (u.tag === 5 || u.tag === 6)
                                e.appendChild(u.stateNode)
                            else if (
                                u.tag !== 4 &&
                                u.tag !== 27 &&
                                u.child !== null
                            ) {
                                ;(u.child.return = u), (u = u.child)
                                continue
                            }
                            if (u === t) break e
                            for (; u.sibling === null; ) {
                                if (u.return === null || u.return === t) break e
                                u = u.return
                            }
                            ;(u.sibling.return = u.return), (u = u.sibling)
                        }
                        t.stateNode = e
                        e: switch ((St(e, l, a), l)) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                e = !!a.autoFocus
                                break e
                            case 'img':
                                e = !0
                                break e
                            default:
                                e = !1
                        }
                        e && Xl(t)
                    }
                }
                return Je(t), (t.flags &= -16777217), null
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== a && Xl(t)
                else {
                    if (typeof a != 'string' && t.stateNode === null)
                        throw Error(o(166))
                    if (((e = ml.current), nu(t))) {
                        if (
                            ((e = t.stateNode),
                            (l = t.memoizedProps),
                            (a = null),
                            (u = wt),
                            u !== null)
                        )
                            switch (u.tag) {
                                case 27:
                                case 5:
                                    a = u.memoizedProps
                            }
                        ;(e[ne] = t),
                            (e = !!(
                                e.nodeValue === l ||
                                (a !== null &&
                                    a.suppressHydrationWarning === !0) ||
                                xh(e.nodeValue, l)
                            )),
                            e || Na(t)
                    } else
                        (e = tr(e).createTextNode(a)),
                            (e[ne] = t),
                            (t.stateNode = e)
                }
                return Je(t), null
            case 13:
                if (
                    ((a = t.memoizedState),
                    e === null ||
                        (e.memoizedState !== null &&
                            e.memoizedState.dehydrated !== null))
                ) {
                    if (((u = nu(t)), a !== null && a.dehydrated !== null)) {
                        if (e === null) {
                            if (!u) throw Error(o(318))
                            if (
                                ((u = t.memoizedState),
                                (u = u !== null ? u.dehydrated : null),
                                !u)
                            )
                                throw Error(o(317))
                            u[ne] = t
                        } else
                            uu(),
                                (t.flags & 128) === 0 &&
                                    (t.memoizedState = null),
                                (t.flags |= 4)
                        Je(t), (u = !1)
                    } else cl !== null && (mo(cl), (cl = null)), (u = !0)
                    if (!u) return t.flags & 256 ? (Nl(t), t) : (Nl(t), null)
                }
                if ((Nl(t), (t.flags & 128) !== 0)) return (t.lanes = l), t
                if (
                    ((l = a !== null),
                    (e = e !== null && e.memoizedState !== null),
                    l)
                ) {
                    ;(a = t.child),
                        (u = null),
                        a.alternate !== null &&
                            a.alternate.memoizedState !== null &&
                            a.alternate.memoizedState.cachePool !== null &&
                            (u = a.alternate.memoizedState.cachePool.pool)
                    var r = null
                    a.memoizedState !== null &&
                        a.memoizedState.cachePool !== null &&
                        (r = a.memoizedState.cachePool.pool),
                        r !== u && (a.flags |= 2048)
                }
                return (
                    l !== e && l && (t.child.flags |= 8192),
                    Qi(t, t.updateQueue),
                    Je(t),
                    null
                )
            case 4:
                return (
                    $l(),
                    e === null && Ao(t.stateNode.containerInfo),
                    Je(t),
                    null
                )
            case 10:
                return Bl(t.type), Je(t), null
            case 19:
                if (($e(rt), (u = t.memoizedState), u === null))
                    return Je(t), null
                if (
                    ((a = (t.flags & 128) !== 0), (r = u.rendering), r === null)
                )
                    if (a) Au(u, !1)
                    else {
                        if (Ie !== 0 || (e !== null && (e.flags & 128) !== 0))
                            for (e = t.child; e !== null; ) {
                                if (((r = Di(e)), r !== null)) {
                                    for (
                                        t.flags |= 128,
                                            Au(u, !1),
                                            e = r.updateQueue,
                                            t.updateQueue = e,
                                            Qi(t, e),
                                            t.subtreeFlags = 0,
                                            e = l,
                                            l = t.child;
                                        l !== null;

                                    )
                                        Pd(l, e), (l = l.sibling)
                                    return Re(rt, (rt.current & 1) | 2), t.child
                                }
                                e = e.sibling
                            }
                        u.tail !== null &&
                            Nt() > Zi &&
                            ((t.flags |= 128),
                            (a = !0),
                            Au(u, !1),
                            (t.lanes = 4194304))
                    }
                else {
                    if (!a)
                        if (((e = Di(r)), e !== null)) {
                            if (
                                ((t.flags |= 128),
                                (a = !0),
                                (e = e.updateQueue),
                                (t.updateQueue = e),
                                Qi(t, e),
                                Au(u, !0),
                                u.tail === null &&
                                    u.tailMode === 'hidden' &&
                                    !r.alternate &&
                                    !ze)
                            )
                                return Je(t), null
                        } else
                            2 * Nt() - u.renderingStartTime > Zi &&
                                l !== 536870912 &&
                                ((t.flags |= 128),
                                (a = !0),
                                Au(u, !1),
                                (t.lanes = 4194304))
                    u.isBackwards
                        ? ((r.sibling = t.child), (t.child = r))
                        : ((e = u.last),
                          e !== null ? (e.sibling = r) : (t.child = r),
                          (u.last = r))
                }
                return u.tail !== null
                    ? ((t = u.tail),
                      (u.rendering = t),
                      (u.tail = t.sibling),
                      (u.renderingStartTime = Nt()),
                      (t.sibling = null),
                      (e = rt.current),
                      Re(rt, a ? (e & 1) | 2 : e & 1),
                      t)
                    : (Je(t), null)
            case 22:
            case 23:
                return (
                    Nl(t),
                    dc(),
                    (a = t.memoizedState !== null),
                    e !== null
                        ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
                        : a && (t.flags |= 8192),
                    a
                        ? (l & 536870912) !== 0 &&
                          (t.flags & 128) === 0 &&
                          (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                        : Je(t),
                    (l = t.updateQueue),
                    l !== null && Qi(t, l.retryQueue),
                    (l = null),
                    e !== null &&
                        e.memoizedState !== null &&
                        e.memoizedState.cachePool !== null &&
                        (l = e.memoizedState.cachePool.pool),
                    (a = null),
                    t.memoizedState !== null &&
                        t.memoizedState.cachePool !== null &&
                        (a = t.memoizedState.cachePool.pool),
                    a !== l && (t.flags |= 2048),
                    e !== null && $e(La),
                    null
                )
            case 24:
                return (
                    (l = null),
                    e !== null && (l = e.memoizedState.cache),
                    t.memoizedState.cache !== l && (t.flags |= 2048),
                    Bl(ct),
                    Je(t),
                    null
                )
            case 25:
                return null
        }
        throw Error(o(156, t.tag))
    }
    function B0(e, t) {
        switch ((cc(t), t.tag)) {
            case 1:
                return (
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                )
            case 3:
                return (
                    Bl(ct),
                    $l(),
                    (e = t.flags),
                    (e & 65536) !== 0 && (e & 128) === 0
                        ? ((t.flags = (e & -65537) | 128), t)
                        : null
                )
            case 26:
            case 27:
            case 5:
                return an(t), null
            case 13:
                if (
                    (Nl(t),
                    (e = t.memoizedState),
                    e !== null && e.dehydrated !== null)
                ) {
                    if (t.alternate === null) throw Error(o(340))
                    uu()
                }
                return (
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                )
            case 19:
                return $e(rt), null
            case 4:
                return $l(), null
            case 10:
                return Bl(t.type), null
            case 22:
            case 23:
                return (
                    Nl(t),
                    dc(),
                    e !== null && $e(La),
                    (e = t.flags),
                    e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                )
            case 24:
                return Bl(ct), null
            case 25:
                return null
            default:
                return null
        }
    }
    function th(e, t) {
        switch ((cc(t), t.tag)) {
            case 3:
                Bl(ct), $l()
                break
            case 26:
            case 27:
            case 5:
                an(t)
                break
            case 4:
                $l()
                break
            case 13:
                Nl(t)
                break
            case 19:
                $e(rt)
                break
            case 10:
                Bl(t.type)
                break
            case 22:
            case 23:
                Nl(t), dc(), e !== null && $e(La)
                break
            case 24:
                Bl(ct)
        }
    }
    var q0 = {
            getCacheForType: function (e) {
                var t = Tt(ct),
                    l = t.data.get(e)
                return l === void 0 && ((l = e()), t.data.set(e, l)), l
            },
        },
        Y0 = typeof WeakMap == 'function' ? WeakMap : Map,
        Fe = 0,
        Xe = null,
        Oe = null,
        Ce = 0,
        Ve = 0,
        Bt = null,
        Vl = !1,
        wn = !1,
        io = !1,
        Ql = 0,
        Ie = 0,
        da = 0,
        Za = 0,
        ro = 0,
        ll = 0,
        Mn = 0,
        Ou = null,
        El = null,
        co = !1,
        oo = 0,
        Zi = 1 / 0,
        Ki = null,
        ha = null,
        ki = !1,
        Ka = null,
        Du = 0,
        so = 0,
        fo = null,
        wu = 0,
        ho = null
    function qt() {
        if ((Fe & 2) !== 0 && Ce !== 0) return Ce & -Ce
        if (k.T !== null) {
            var e = Sn
            return e !== 0 ? e : Eo()
        }
        return ee()
    }
    function lh() {
        ll === 0 && (ll = (Ce & 536870912) === 0 || ze ? ii() : 536870912)
        var e = Pt.current
        return e !== null && (e.flags |= 32), ll
    }
    function Mt(e, t, l) {
        ;((e === Xe && Ve === 2) || e.cancelPendingCommit !== null) &&
            (Cn(e, 0), Zl(e, Ce, ll, !1)),
            j(e, l),
            ((Fe & 2) === 0 || e !== Xe) &&
                (e === Xe &&
                    ((Fe & 2) === 0 && (Za |= l),
                    Ie === 4 && Zl(e, Ce, ll, !1)),
                Rl(e))
    }
    function ah(e, t, l) {
        if ((Fe & 6) !== 0) throw Error(o(327))
        var a =
                (!l && (t & 60) === 0 && (t & e.expiredLanes) === 0) ||
                pl(e, t),
            u = a ? V0(e, t) : po(e, t, !0),
            r = a
        do {
            if (u === 0) {
                wn && !a && Zl(e, t, 0, !1)
                break
            } else if (u === 6) Zl(e, t, 0, !Vl)
            else {
                if (((l = e.current.alternate), r && !G0(l))) {
                    ;(u = po(e, t, !1)), (r = !1)
                    continue
                }
                if (u === 2) {
                    if (((r = t), e.errorRecoveryDisabledLanes & r)) var d = 0
                    else
                        (d = e.pendingLanes & -536870913),
                            (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0)
                    if (d !== 0) {
                        t = d
                        e: {
                            var y = e
                            u = Ou
                            var b = y.current.memoizedState.isDehydrated
                            if (
                                (b && (Cn(y, d).flags |= 256),
                                (d = po(y, d, !1)),
                                d !== 2)
                            ) {
                                if (io && !b) {
                                    ;(y.errorRecoveryDisabledLanes |= r),
                                        (Za |= r),
                                        (u = 4)
                                    break e
                                }
                                ;(r = El), (El = u), r !== null && mo(r)
                            }
                            u = d
                        }
                        if (((r = !1), u !== 2)) continue
                    }
                }
                if (u === 1) {
                    Cn(e, 0), Zl(e, t, 0, !0)
                    break
                }
                e: {
                    switch (((a = e), u)) {
                        case 0:
                        case 1:
                            throw Error(o(345))
                        case 4:
                            if ((t & 4194176) === t) {
                                Zl(a, t, ll, !Vl)
                                break e
                            }
                            break
                        case 2:
                            El = null
                            break
                        case 3:
                        case 5:
                            break
                        default:
                            throw Error(o(329))
                    }
                    if (
                        ((a.finishedWork = l),
                        (a.finishedLanes = t),
                        (t & 62914560) === t && ((r = oo + 300 - Nt()), 10 < r))
                    ) {
                        if ((Zl(a, t, ll, !Vl), Dl(a, 0) !== 0)) break e
                        a.timeoutHandle = Dh(
                            nh.bind(
                                null,
                                a,
                                l,
                                El,
                                Ki,
                                co,
                                t,
                                ll,
                                Za,
                                Mn,
                                Vl,
                                2,
                                -0,
                                0,
                            ),
                            r,
                        )
                        break e
                    }
                    nh(a, l, El, Ki, co, t, ll, Za, Mn, Vl, 0, -0, 0)
                }
            }
            break
        } while (!0)
        Rl(e)
    }
    function mo(e) {
        El === null ? (El = e) : El.push.apply(El, e)
    }
    function nh(e, t, l, a, u, r, d, y, b, T, G, Q, N) {
        var B = t.subtreeFlags
        if (
            (B & 8192 || (B & 16785408) === 16785408) &&
            ((Nu = { stylesheets: null, count: 0, unsuspend: Rv }),
            Jd(t),
            (t = xv()),
            t !== null)
        ) {
            ;(e.cancelPendingCommit = t(
                fh.bind(null, e, l, a, u, d, y, b, 1, Q, N),
            )),
                Zl(e, r, d, !T)
            return
        }
        fh(e, l, a, u, d, y, b, G, Q, N)
    }
    function G0(e) {
        for (var t = e; ; ) {
            var l = t.tag
            if (
                (l === 0 || l === 11 || l === 15) &&
                t.flags & 16384 &&
                ((l = t.updateQueue),
                l !== null && ((l = l.stores), l !== null))
            )
                for (var a = 0; a < l.length; a++) {
                    var u = l[a],
                        r = u.getSnapshot
                    u = u.value
                    try {
                        if (!jt(r(), u)) return !1
                    } catch {
                        return !1
                    }
                }
            if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
                (l.return = t), (t = l)
            else {
                if (t === e) break
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) return !0
                    t = t.return
                }
                ;(t.sibling.return = t.return), (t = t.sibling)
            }
        }
        return !0
    }
    function Zl(e, t, l, a) {
        ;(t &= ~ro),
            (t &= ~Za),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            a && (e.warmLanes |= t),
            (a = e.expirationTimes)
        for (var u = t; 0 < u; ) {
            var r = 31 - ot(u),
                d = 1 << r
            ;(a[r] = -1), (u &= ~d)
        }
        l !== 0 && I(e, l, t)
    }
    function Ji() {
        return (Fe & 6) === 0 ? (Mu(0), !1) : !0
    }
    function yo() {
        if (Oe !== null) {
            if (Ve === 0) var e = Oe.return
            else
                (e = Oe),
                    (Hl = Ga = null),
                    Sc(e),
                    (gn = null),
                    (ou = 0),
                    (e = Oe)
            for (; e !== null; ) th(e.alternate, e), (e = e.return)
            Oe = null
        }
    }
    function Cn(e, t) {
        ;(e.finishedWork = null), (e.finishedLanes = 0)
        var l = e.timeoutHandle
        l !== -1 && ((e.timeoutHandle = -1), iv(l)),
            (l = e.cancelPendingCommit),
            l !== null && ((e.cancelPendingCommit = null), l()),
            yo(),
            (Xe = e),
            (Oe = l = fa(e.current, null)),
            (Ce = t),
            (Ve = 0),
            (Bt = null),
            (Vl = !1),
            (wn = pl(e, t)),
            (io = !1),
            (Mn = ll = ro = Za = da = Ie = 0),
            (El = Ou = null),
            (co = !1),
            (t & 8) !== 0 && (t |= t & 32)
        var a = e.entangledLanes
        if (a !== 0)
            for (e = e.entanglements, a &= t; 0 < a; ) {
                var u = 31 - ot(a),
                    r = 1 << u
                ;(t |= e[u]), (a &= ~r)
            }
        return (Ql = t), gi(), l
    }
    function uh(e, t) {
        ;(xe = null),
            (k.H = Sl),
            t === ru
                ? ((t = Sf()), (Ve = 3))
                : t === pf
                  ? ((t = Sf()), (Ve = 4))
                  : (Ve =
                        t === gd
                            ? 8
                            : t !== null &&
                                typeof t == 'object' &&
                                typeof t.then == 'function'
                              ? 6
                              : 1),
            (Bt = t),
            Oe === null && ((Ie = 1), Bi(e, Ft(t, e.current)))
    }
    function ih() {
        var e = k.H
        return (k.H = Sl), e === null ? Sl : e
    }
    function rh() {
        var e = k.A
        return (k.A = q0), e
    }
    function vo() {
        ;(Ie = 4),
            Vl || ((Ce & 4194176) !== Ce && Pt.current !== null) || (wn = !0),
            ((da & 134217727) === 0 && (Za & 134217727) === 0) ||
                Xe === null ||
                Zl(Xe, Ce, ll, !1)
    }
    function po(e, t, l) {
        var a = Fe
        Fe |= 2
        var u = ih(),
            r = rh()
        ;(Xe !== e || Ce !== t) && ((Ki = null), Cn(e, t)), (t = !1)
        var d = Ie
        e: do
            try {
                if (Ve !== 0 && Oe !== null) {
                    var y = Oe,
                        b = Bt
                    switch (Ve) {
                        case 8:
                            yo(), (d = 6)
                            break e
                        case 3:
                        case 2:
                        case 6:
                            Pt.current === null && (t = !0)
                            var T = Ve
                            if (
                                ((Ve = 0), (Bt = null), _n(e, y, b, T), l && wn)
                            ) {
                                d = 0
                                break e
                            }
                            break
                        default:
                            ;(T = Ve), (Ve = 0), (Bt = null), _n(e, y, b, T)
                    }
                }
                X0(), (d = Ie)
                break
            } catch (G) {
                uh(e, G)
            }
        while (!0)
        return (
            t && e.shellSuspendCounter++,
            (Hl = Ga = null),
            (Fe = a),
            (k.H = u),
            (k.A = r),
            Oe === null && ((Xe = null), (Ce = 0), gi()),
            d
        )
    }
    function X0() {
        for (; Oe !== null; ) ch(Oe)
    }
    function V0(e, t) {
        var l = Fe
        Fe |= 2
        var a = ih(),
            u = rh()
        Xe !== e || Ce !== t
            ? ((Ki = null), (Zi = Nt() + 500), Cn(e, t))
            : (wn = pl(e, t))
        e: do
            try {
                if (Ve !== 0 && Oe !== null) {
                    t = Oe
                    var r = Bt
                    t: switch (Ve) {
                        case 1:
                            ;(Ve = 0), (Bt = null), _n(e, t, r, 1)
                            break
                        case 2:
                            if (gf(r)) {
                                ;(Ve = 0), (Bt = null), oh(t)
                                break
                            }
                            ;(t = function () {
                                Ve === 2 && Xe === e && (Ve = 7), Rl(e)
                            }),
                                r.then(t, t)
                            break e
                        case 3:
                            Ve = 7
                            break e
                        case 4:
                            Ve = 5
                            break e
                        case 7:
                            gf(r)
                                ? ((Ve = 0), (Bt = null), oh(t))
                                : ((Ve = 0), (Bt = null), _n(e, t, r, 7))
                            break
                        case 5:
                            var d = null
                            switch (Oe.tag) {
                                case 26:
                                    d = Oe.memoizedState
                                case 5:
                                case 27:
                                    var y = Oe
                                    if (!d || Bh(d)) {
                                        ;(Ve = 0), (Bt = null)
                                        var b = y.sibling
                                        if (b !== null) Oe = b
                                        else {
                                            var T = y.return
                                            T !== null
                                                ? ((Oe = T), Fi(T))
                                                : (Oe = null)
                                        }
                                        break t
                                    }
                            }
                            ;(Ve = 0), (Bt = null), _n(e, t, r, 5)
                            break
                        case 6:
                            ;(Ve = 0), (Bt = null), _n(e, t, r, 6)
                            break
                        case 8:
                            yo(), (Ie = 6)
                            break e
                        default:
                            throw Error(o(462))
                    }
                }
                Q0()
                break
            } catch (G) {
                uh(e, G)
            }
        while (!0)
        return (
            (Hl = Ga = null),
            (k.H = a),
            (k.A = u),
            (Fe = l),
            Oe !== null ? 0 : ((Xe = null), (Ce = 0), gi(), Ie)
        )
    }
    function Q0() {
        for (; Oe !== null && !Ol(); ) ch(Oe)
    }
    function ch(e) {
        var t = Cd(e.alternate, e, Ql)
        ;(e.memoizedProps = e.pendingProps), t === null ? Fi(e) : (Oe = t)
    }
    function oh(e) {
        var t = e,
            l = t.alternate
        switch (t.tag) {
            case 15:
            case 0:
                t = xd(l, t, t.pendingProps, t.type, void 0, Ce)
                break
            case 11:
                t = xd(l, t, t.pendingProps, t.type.render, t.ref, Ce)
                break
            case 5:
                Sc(t)
            default:
                th(l, t), (t = Oe = Pd(t, Ql)), (t = Cd(l, t, Ql))
        }
        ;(e.memoizedProps = e.pendingProps), t === null ? Fi(e) : (Oe = t)
    }
    function _n(e, t, l, a) {
        ;(Hl = Ga = null), Sc(t), (gn = null), (ou = 0)
        var u = t.return
        try {
            if (U0(e, u, t, l, Ce)) {
                ;(Ie = 1), Bi(e, Ft(l, e.current)), (Oe = null)
                return
            }
        } catch (r) {
            if (u !== null) throw ((Oe = u), r)
            ;(Ie = 1), Bi(e, Ft(l, e.current)), (Oe = null)
            return
        }
        t.flags & 32768
            ? (ze || a === 1
                  ? (e = !0)
                  : wn || (Ce & 536870912) !== 0
                    ? (e = !1)
                    : ((Vl = e = !0),
                      (a === 2 || a === 3 || a === 6) &&
                          ((a = Pt.current),
                          a !== null && a.tag === 13 && (a.flags |= 16384))),
              sh(t, e))
            : Fi(t)
    }
    function Fi(e) {
        var t = e
        do {
            if ((t.flags & 32768) !== 0) {
                sh(t, Vl)
                return
            }
            e = t.return
            var l = H0(t.alternate, t, Ql)
            if (l !== null) {
                Oe = l
                return
            }
            if (((t = t.sibling), t !== null)) {
                Oe = t
                return
            }
            Oe = t = e
        } while (t !== null)
        Ie === 0 && (Ie = 5)
    }
    function sh(e, t) {
        do {
            var l = B0(e.alternate, e)
            if (l !== null) {
                ;(l.flags &= 32767), (Oe = l)
                return
            }
            if (
                ((l = e.return),
                l !== null &&
                    ((l.flags |= 32768),
                    (l.subtreeFlags = 0),
                    (l.deletions = null)),
                !t && ((e = e.sibling), e !== null))
            ) {
                Oe = e
                return
            }
            Oe = e = l
        } while (e !== null)
        ;(Ie = 6), (Oe = null)
    }
    function fh(e, t, l, a, u, r, d, y, b, T) {
        var G = k.T,
            Q = P.p
        try {
            ;(P.p = 2), (k.T = null), Z0(e, t, l, a, Q, u, r, d, y, b, T)
        } finally {
            ;(k.T = G), (P.p = Q)
        }
    }
    function Z0(e, t, l, a, u, r, d, y) {
        do Un()
        while (Ka !== null)
        if ((Fe & 6) !== 0) throw Error(o(327))
        var b = e.finishedWork
        if (((a = e.finishedLanes), b === null)) return null
        if (((e.finishedWork = null), (e.finishedLanes = 0), b === e.current))
            throw Error(o(177))
        ;(e.callbackNode = null),
            (e.callbackPriority = 0),
            (e.cancelPendingCommit = null)
        var T = b.lanes | b.childLanes
        if (
            ((T |= uc),
            K(e, a, T, r, d, y),
            e === Xe && ((Oe = Xe = null), (Ce = 0)),
            ((b.subtreeFlags & 10256) === 0 && (b.flags & 10256) === 0) ||
                ki ||
                ((ki = !0),
                (so = T),
                (fo = l),
                F0(xa, function () {
                    return Un(), null
                })),
            (l = (b.flags & 15990) !== 0),
            (b.subtreeFlags & 15990) !== 0 || l
                ? ((l = k.T),
                  (k.T = null),
                  (r = P.p),
                  (P.p = 2),
                  (d = Fe),
                  (Fe |= 4),
                  N0(e, b),
                  Zd(b, e),
                  y0(Mo, e.containerInfo),
                  (rr = !!wo),
                  (Mo = wo = null),
                  (e.current = b),
                  Gd(e, b.alternate, b),
                  Ta(),
                  (Fe = d),
                  (P.p = r),
                  (k.T = l))
                : (e.current = b),
            ki ? ((ki = !1), (Ka = e), (Du = a)) : dh(e, T),
            (T = e.pendingLanes),
            T === 0 && (ha = null),
            Hr(b.stateNode),
            Rl(e),
            t !== null)
        )
            for (u = e.onRecoverableError, b = 0; b < t.length; b++)
                (T = t[b]), u(T.value, { componentStack: T.stack })
        return (
            (Du & 3) !== 0 && Un(),
            (T = e.pendingLanes),
            (a & 4194218) !== 0 && (T & 42) !== 0
                ? e === ho
                    ? wu++
                    : ((wu = 0), (ho = e))
                : (wu = 0),
            Mu(0),
            null
        )
    }
    function dh(e, t) {
        ;(e.pooledCacheLanes &= t) === 0 &&
            ((t = e.pooledCache), t != null && ((e.pooledCache = null), fu(t)))
    }
    function Un() {
        if (Ka !== null) {
            var e = Ka,
                t = so
            so = 0
            var l = ye(Du),
                a = k.T,
                u = P.p
            try {
                if (((P.p = 32 > l ? 32 : l), (k.T = null), Ka === null))
                    var r = !1
                else {
                    ;(l = fo), (fo = null)
                    var d = Ka,
                        y = Du
                    if (((Ka = null), (Du = 0), (Fe & 6) !== 0))
                        throw Error(o(331))
                    var b = Fe
                    if (
                        ((Fe |= 4),
                        $d(d.current),
                        kd(d, d.current, y, l),
                        (Fe = b),
                        Mu(0, !1),
                        Rt && typeof Rt.onPostCommitFiberRoot == 'function')
                    )
                        try {
                            Rt.onPostCommitFiberRoot(Wl, d)
                        } catch {}
                    r = !0
                }
                return r
            } finally {
                ;(P.p = u), (k.T = a), dh(e, t)
            }
        }
        return !1
    }
    function hh(e, t, l) {
        ;(t = Ft(l, t)),
            (t = Nc(e.stateNode, t, 2)),
            (e = ra(e, t, 2)),
            e !== null && (j(e, 2), Rl(e))
    }
    function Ye(e, t, l) {
        if (e.tag === 3) hh(e, e, l)
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    hh(t, e, l)
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode
                    if (
                        typeof t.type.getDerivedStateFromError == 'function' ||
                        (typeof a.componentDidCatch == 'function' &&
                            (ha === null || !ha.has(a)))
                    ) {
                        ;(e = Ft(l, e)),
                            (l = vd(2)),
                            (a = ra(t, l, 2)),
                            a !== null && (pd(l, a, t, e), j(a, 2), Rl(a))
                        break
                    }
                }
                t = t.return
            }
    }
    function go(e, t, l) {
        var a = e.pingCache
        if (a === null) {
            a = e.pingCache = new Y0()
            var u = new Set()
            a.set(t, u)
        } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u))
        u.has(l) ||
            ((io = !0), u.add(l), (e = K0.bind(null, e, t, l)), t.then(e, e))
    }
    function K0(e, t, l) {
        var a = e.pingCache
        a !== null && a.delete(t),
            (e.pingedLanes |= e.suspendedLanes & l),
            (e.warmLanes &= ~l),
            Xe === e &&
                (Ce & l) === l &&
                (Ie === 4 ||
                (Ie === 3 && (Ce & 62914560) === Ce && 300 > Nt() - oo)
                    ? (Fe & 2) === 0 && Cn(e, 0)
                    : (ro |= l),
                Mn === Ce && (Mn = 0)),
            Rl(e)
    }
    function mh(e, t) {
        t === 0 && (t = E()), (e = Il(e, t)), e !== null && (j(e, t), Rl(e))
    }
    function k0(e) {
        var t = e.memoizedState,
            l = 0
        t !== null && (l = t.retryLane), mh(e, l)
    }
    function J0(e, t) {
        var l = 0
        switch (e.tag) {
            case 13:
                var a = e.stateNode,
                    u = e.memoizedState
                u !== null && (l = u.retryLane)
                break
            case 19:
                a = e.stateNode
                break
            case 22:
                a = e.stateNode._retryCache
                break
            default:
                throw Error(o(314))
        }
        a !== null && a.delete(t), mh(e, l)
    }
    function F0(e, t) {
        return Qn(e, t)
    }
    var $i = null,
        zn = null,
        bo = !1,
        Wi = !1,
        So = !1,
        ka = 0
    function Rl(e) {
        e !== zn &&
            e.next === null &&
            (zn === null ? ($i = zn = e) : (zn = zn.next = e)),
            (Wi = !0),
            bo || ((bo = !0), W0($0))
    }
    function Mu(e, t) {
        if (!So && Wi) {
            So = !0
            do
                for (var l = !1, a = $i; a !== null; ) {
                    if (e !== 0) {
                        var u = a.pendingLanes
                        if (u === 0) var r = 0
                        else {
                            var d = a.suspendedLanes,
                                y = a.pingedLanes
                            ;(r = (1 << (31 - ot(42 | e) + 1)) - 1),
                                (r &= u & ~(d & ~y)),
                                (r =
                                    r & 201326677
                                        ? (r & 201326677) | 1
                                        : r
                                          ? r | 2
                                          : 0)
                        }
                        r !== 0 && ((l = !0), ph(a, r))
                    } else
                        (r = Ce),
                            (r = Dl(a, a === Xe ? r : 0)),
                            (r & 3) === 0 || pl(a, r) || ((l = !0), ph(a, r))
                    a = a.next
                }
            while (l)
            So = !1
        }
    }
    function $0() {
        Wi = bo = !1
        var e = 0
        ka !== 0 && (uv() && (e = ka), (ka = 0))
        for (var t = Nt(), l = null, a = $i; a !== null; ) {
            var u = a.next,
                r = yh(a, t)
            r === 0
                ? ((a.next = null),
                  l === null ? ($i = u) : (l.next = u),
                  u === null && (zn = l))
                : ((l = a), (e !== 0 || (r & 3) !== 0) && (Wi = !0)),
                (a = u)
        }
        Mu(e)
    }
    function yh(e, t) {
        for (
            var l = e.suspendedLanes,
                a = e.pingedLanes,
                u = e.expirationTimes,
                r = e.pendingLanes & -62914561;
            0 < r;

        ) {
            var d = 31 - ot(r),
                y = 1 << d,
                b = u[d]
            b === -1
                ? ((y & l) === 0 || (y & a) !== 0) && (u[d] = qr(y, t))
                : b <= t && (e.expiredLanes |= y),
                (r &= ~y)
        }
        if (
            ((t = Xe),
            (l = Ce),
            (l = Dl(e, e === t ? l : 0)),
            (a = e.callbackNode),
            l === 0 || (e === t && Ve === 2) || e.cancelPendingCommit !== null)
        )
            return (
                a !== null && a !== null && Zn(a),
                (e.callbackNode = null),
                (e.callbackPriority = 0)
            )
        if ((l & 3) === 0 || pl(e, l)) {
            if (((t = l & -l), t === e.callbackPriority)) return t
            switch ((a !== null && Zn(a), ye(l))) {
                case 2:
                case 8:
                    l = Vt
                    break
                case 32:
                    l = xa
                    break
                case 268435456:
                    l = ai
                    break
                default:
                    l = xa
            }
            return (
                (a = vh.bind(null, e)),
                (l = Qn(l, a)),
                (e.callbackPriority = t),
                (e.callbackNode = l),
                t
            )
        }
        return (
            a !== null && a !== null && Zn(a),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
        )
    }
    function vh(e, t) {
        var l = e.callbackNode
        if (Un() && e.callbackNode !== l) return null
        var a = Ce
        return (
            (a = Dl(e, e === Xe ? a : 0)),
            a === 0
                ? null
                : (ah(e, a, t),
                  yh(e, Nt()),
                  e.callbackNode != null && e.callbackNode === l
                      ? vh.bind(null, e)
                      : null)
        )
    }
    function ph(e, t) {
        if (Un()) return null
        ah(e, t, !0)
    }
    function W0(e) {
        rv(function () {
            ;(Fe & 6) !== 0 ? Qn(ul, e) : e()
        })
    }
    function Eo() {
        return ka === 0 && (ka = ii()), ka
    }
    function gh(e) {
        return e == null || typeof e == 'symbol' || typeof e == 'boolean'
            ? null
            : typeof e == 'function'
              ? e
              : fi('' + e)
    }
    function bh(e, t) {
        var l = t.ownerDocument.createElement('input')
        return (
            (l.name = t.name),
            (l.value = t.value),
            e.id && l.setAttribute('form', e.id),
            t.parentNode.insertBefore(l, t),
            (e = new FormData(e)),
            l.parentNode.removeChild(l),
            e
        )
    }
    function P0(e, t, l, a, u) {
        if (t === 'submit' && l && l.stateNode === u) {
            var r = gh((u[de] || null).action),
                d = a.submitter
            d &&
                ((t = (t = d[de] || null)
                    ? gh(t.formAction)
                    : d.getAttribute('formAction')),
                t !== null && ((r = t), (d = null)))
            var y = new yi('action', 'action', null, a, u)
            e.push({
                event: y,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (a.defaultPrevented) {
                                if (ka !== 0) {
                                    var b = d ? bh(u, d) : new FormData(u)
                                    Mc(
                                        l,
                                        {
                                            pending: !0,
                                            data: b,
                                            method: u.method,
                                            action: r,
                                        },
                                        null,
                                        b,
                                    )
                                }
                            } else
                                typeof r == 'function' &&
                                    (y.preventDefault(),
                                    (b = d ? bh(u, d) : new FormData(u)),
                                    Mc(
                                        l,
                                        {
                                            pending: !0,
                                            data: b,
                                            method: u.method,
                                            action: r,
                                        },
                                        r,
                                        b,
                                    ))
                        },
                        currentTarget: u,
                    },
                ],
            })
        }
    }
    for (var Ro = 0; Ro < ff.length; Ro++) {
        var To = ff[Ro],
            I0 = To.toLowerCase(),
            ev = To[0].toUpperCase() + To.slice(1)
        rl(I0, 'on' + ev)
    }
    rl(uf, 'onAnimationEnd'),
        rl(rf, 'onAnimationIteration'),
        rl(cf, 'onAnimationStart'),
        rl('dblclick', 'onDoubleClick'),
        rl('focusin', 'onFocus'),
        rl('focusout', 'onBlur'),
        rl(p0, 'onTransitionRun'),
        rl(g0, 'onTransitionStart'),
        rl(b0, 'onTransitionCancel'),
        rl(of, 'onTransitionEnd'),
        Ke('onMouseEnter', ['mouseout', 'mouseover']),
        Ke('onMouseLeave', ['mouseout', 'mouseover']),
        Ke('onPointerEnter', ['pointerout', 'pointerover']),
        Ke('onPointerLeave', ['pointerout', 'pointerover']),
        Me(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
                ' ',
            ),
        ),
        Me(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
                ' ',
            ),
        ),
        Me('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
        ]),
        Me(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
                ' ',
            ),
        ),
        Me(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
                ' ',
            ),
        ),
        Me(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
                ' ',
            ),
        )
    var Cu =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
                ' ',
            ),
        tv = new Set(
            'beforetoggle cancel close invalid load scroll scrollend toggle'
                .split(' ')
                .concat(Cu),
        )
    function Sh(e, t) {
        t = (t & 4) !== 0
        for (var l = 0; l < e.length; l++) {
            var a = e[l],
                u = a.event
            a = a.listeners
            e: {
                var r = void 0
                if (t)
                    for (var d = a.length - 1; 0 <= d; d--) {
                        var y = a[d],
                            b = y.instance,
                            T = y.currentTarget
                        if (
                            ((y = y.listener),
                            b !== r && u.isPropagationStopped())
                        )
                            break e
                        ;(r = y), (u.currentTarget = T)
                        try {
                            r(u)
                        } catch (G) {
                            Hi(G)
                        }
                        ;(u.currentTarget = null), (r = b)
                    }
                else
                    for (d = 0; d < a.length; d++) {
                        if (
                            ((y = a[d]),
                            (b = y.instance),
                            (T = y.currentTarget),
                            (y = y.listener),
                            b !== r && u.isPropagationStopped())
                        )
                            break e
                        ;(r = y), (u.currentTarget = T)
                        try {
                            r(u)
                        } catch (G) {
                            Hi(G)
                        }
                        ;(u.currentTarget = null), (r = b)
                    }
            }
        }
    }
    function De(e, t) {
        var l = t[tt]
        l === void 0 && (l = t[tt] = new Set())
        var a = e + '__bubble'
        l.has(a) || (Eh(t, e, 2, !1), l.add(a))
    }
    function xo(e, t, l) {
        var a = 0
        t && (a |= 4), Eh(l, e, a, t)
    }
    var Pi = '_reactListening' + Math.random().toString(36).slice(2)
    function Ao(e) {
        if (!e[Pi]) {
            ;(e[Pi] = !0),
                Oa.forEach(function (l) {
                    l !== 'selectionchange' &&
                        (tv.has(l) || xo(l, !1, e), xo(l, !0, e))
                })
            var t = e.nodeType === 9 ? e : e.ownerDocument
            t === null || t[Pi] || ((t[Pi] = !0), xo('selectionchange', !1, t))
        }
    }
    function Eh(e, t, l, a) {
        switch (Qh(t)) {
            case 2:
                var u = Dv
                break
            case 8:
                u = wv
                break
            default:
                u = Bo
        }
        ;(l = u.bind(null, t, l, e)),
            (u = void 0),
            !Kr ||
                (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
                (u = !0),
            a
                ? u !== void 0
                    ? e.addEventListener(t, l, { capture: !0, passive: u })
                    : e.addEventListener(t, l, !0)
                : u !== void 0
                  ? e.addEventListener(t, l, { passive: u })
                  : e.addEventListener(t, l, !1)
    }
    function Oo(e, t, l, a, u) {
        var r = a
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (;;) {
                if (a === null) return
                var d = a.tag
                if (d === 3 || d === 4) {
                    var y = a.stateNode.containerInfo
                    if (y === u || (y.nodeType === 8 && y.parentNode === u))
                        break
                    if (d === 4)
                        for (d = a.return; d !== null; ) {
                            var b = d.tag
                            if (
                                (b === 3 || b === 4) &&
                                ((b = d.stateNode.containerInfo),
                                b === u ||
                                    (b.nodeType === 8 && b.parentNode === u))
                            )
                                return
                            d = d.return
                        }
                    for (; y !== null; ) {
                        if (((d = vt(y)), d === null)) return
                        if (
                            ((b = d.tag),
                            b === 5 || b === 6 || b === 26 || b === 27)
                        ) {
                            a = r = d
                            continue e
                        }
                        y = y.parentNode
                    }
                }
                a = a.return
            }
        js(function () {
            var T = r,
                G = Qr(l),
                Q = []
            e: {
                var N = sf.get(e)
                if (N !== void 0) {
                    var B = yi,
                        ue = e
                    switch (e) {
                        case 'keypress':
                            if (hi(l) === 0) break e
                        case 'keydown':
                        case 'keyup':
                            B = Jy
                            break
                        case 'focusin':
                            ;(ue = 'focus'), (B = $r)
                            break
                        case 'focusout':
                            ;(ue = 'blur'), (B = $r)
                            break
                        case 'beforeblur':
                        case 'afterblur':
                            B = $r
                            break
                        case 'click':
                            if (l.button === 2) break e
                        case 'auxclick':
                        case 'dblclick':
                        case 'mousedown':
                        case 'mousemove':
                        case 'mouseup':
                        case 'mouseout':
                        case 'mouseover':
                        case 'contextmenu':
                            B = Bs
                            break
                        case 'drag':
                        case 'dragend':
                        case 'dragenter':
                        case 'dragexit':
                        case 'dragleave':
                        case 'dragover':
                        case 'dragstart':
                        case 'drop':
                            B = Ly
                            break
                        case 'touchcancel':
                        case 'touchend':
                        case 'touchmove':
                        case 'touchstart':
                            B = Wy
                            break
                        case uf:
                        case rf:
                        case cf:
                            B = qy
                            break
                        case of:
                            B = Iy
                            break
                        case 'scroll':
                        case 'scrollend':
                            B = Ny
                            break
                        case 'wheel':
                            B = t0
                            break
                        case 'copy':
                        case 'cut':
                        case 'paste':
                            B = Gy
                            break
                        case 'gotpointercapture':
                        case 'lostpointercapture':
                        case 'pointercancel':
                        case 'pointerdown':
                        case 'pointermove':
                        case 'pointerout':
                        case 'pointerover':
                        case 'pointerup':
                            B = Ys
                            break
                        case 'toggle':
                        case 'beforetoggle':
                            B = a0
                    }
                    var ge = (t & 4) !== 0,
                        et = !ge && (e === 'scroll' || e === 'scrollend'),
                        w = ge ? (N !== null ? N + 'Capture' : null) : N
                    ge = []
                    for (var R = T, U; R !== null; ) {
                        var X = R
                        if (
                            ((U = X.stateNode),
                            (X = X.tag),
                            (X !== 5 && X !== 26 && X !== 27) ||
                                U === null ||
                                w === null ||
                                ((X = Fn(R, w)),
                                X != null && ge.push(_u(R, X, U))),
                            et)
                        )
                            break
                        R = R.return
                    }
                    0 < ge.length &&
                        ((N = new B(N, ue, null, l, G)),
                        Q.push({ event: N, listeners: ge }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (
                        ((N = e === 'mouseover' || e === 'pointerover'),
                        (B = e === 'mouseout' || e === 'pointerout'),
                        N &&
                            l !== Vr &&
                            (ue = l.relatedTarget || l.fromElement) &&
                            (vt(ue) || ue[je]))
                    )
                        break e
                    if (
                        (B || N) &&
                        ((N =
                            G.window === G
                                ? G
                                : (N = G.ownerDocument)
                                  ? N.defaultView || N.parentWindow
                                  : window),
                        B
                            ? ((ue = l.relatedTarget || l.toElement),
                              (B = T),
                              (ue = ue ? vt(ue) : null),
                              ue !== null &&
                                  ((et = se(ue)),
                                  (ge = ue.tag),
                                  ue !== et ||
                                      (ge !== 5 && ge !== 27 && ge !== 6)) &&
                                  (ue = null))
                            : ((B = null), (ue = T)),
                        B !== ue)
                    ) {
                        if (
                            ((ge = Bs),
                            (X = 'onMouseLeave'),
                            (w = 'onMouseEnter'),
                            (R = 'mouse'),
                            (e === 'pointerout' || e === 'pointerover') &&
                                ((ge = Ys),
                                (X = 'onPointerLeave'),
                                (w = 'onPointerEnter'),
                                (R = 'pointer')),
                            (et = B == null ? N : Ml(B)),
                            (U = ue == null ? N : Ml(ue)),
                            (N = new ge(X, R + 'leave', B, l, G)),
                            (N.target = et),
                            (N.relatedTarget = U),
                            (X = null),
                            vt(G) === T &&
                                ((ge = new ge(w, R + 'enter', ue, l, G)),
                                (ge.target = U),
                                (ge.relatedTarget = et),
                                (X = ge)),
                            (et = X),
                            B && ue)
                        )
                            t: {
                                for (
                                    ge = B, w = ue, R = 0, U = ge;
                                    U;
                                    U = Nn(U)
                                )
                                    R++
                                for (U = 0, X = w; X; X = Nn(X)) U++
                                for (; 0 < R - U; ) (ge = Nn(ge)), R--
                                for (; 0 < U - R; ) (w = Nn(w)), U--
                                for (; R--; ) {
                                    if (
                                        ge === w ||
                                        (w !== null && ge === w.alternate)
                                    )
                                        break t
                                    ;(ge = Nn(ge)), (w = Nn(w))
                                }
                                ge = null
                            }
                        else ge = null
                        B !== null && Rh(Q, N, B, ge, !1),
                            ue !== null && et !== null && Rh(Q, et, ue, ge, !0)
                    }
                }
                e: {
                    if (
                        ((N = T ? Ml(T) : window),
                        (B = N.nodeName && N.nodeName.toLowerCase()),
                        B === 'select' || (B === 'input' && N.type === 'file'))
                    )
                        var te = Js
                    else if (Ks(N))
                        if (Fs) te = h0
                        else {
                            te = f0
                            var Ae = s0
                        }
                    else
                        (B = N.nodeName),
                            !B ||
                            B.toLowerCase() !== 'input' ||
                            (N.type !== 'checkbox' && N.type !== 'radio')
                                ? T && Xr(T.elementType) && (te = Js)
                                : (te = d0)
                    if (te && (te = te(e, T))) {
                        ks(Q, te, l, G)
                        break e
                    }
                    Ae && Ae(e, N, T),
                        e === 'focusout' &&
                            T &&
                            N.type === 'number' &&
                            T.memoizedProps.value != null &&
                            Gr(N, 'number', N.value)
                }
                switch (((Ae = T ? Ml(T) : window), e)) {
                    case 'focusin':
                        ;(Ks(Ae) || Ae.contentEditable === 'true') &&
                            ((dn = Ae), (lc = T), (au = null))
                        break
                    case 'focusout':
                        au = lc = dn = null
                        break
                    case 'mousedown':
                        ac = !0
                        break
                    case 'contextmenu':
                    case 'mouseup':
                    case 'dragend':
                        ;(ac = !1), af(Q, l, G)
                        break
                    case 'selectionchange':
                        if (v0) break
                    case 'keydown':
                    case 'keyup':
                        af(Q, l, G)
                }
                var re
                if (Pr)
                    e: {
                        switch (e) {
                            case 'compositionstart':
                                var me = 'onCompositionStart'
                                break e
                            case 'compositionend':
                                me = 'onCompositionEnd'
                                break e
                            case 'compositionupdate':
                                me = 'onCompositionUpdate'
                                break e
                        }
                        me = void 0
                    }
                else
                    fn
                        ? Qs(e, l) && (me = 'onCompositionEnd')
                        : e === 'keydown' &&
                          l.keyCode === 229 &&
                          (me = 'onCompositionStart')
                me &&
                    (Gs &&
                        l.locale !== 'ko' &&
                        (fn || me !== 'onCompositionStart'
                            ? me === 'onCompositionEnd' && fn && (re = Ls())
                            : ((Pl = G),
                              (kr = 'value' in Pl ? Pl.value : Pl.textContent),
                              (fn = !0))),
                    (Ae = Ii(T, me)),
                    0 < Ae.length &&
                        ((me = new qs(me, e, null, l, G)),
                        Q.push({ event: me, listeners: Ae }),
                        re
                            ? (me.data = re)
                            : ((re = Zs(l)), re !== null && (me.data = re)))),
                    (re = u0 ? i0(e, l) : r0(e, l)) &&
                        ((me = Ii(T, 'onBeforeInput')),
                        0 < me.length &&
                            ((Ae = new qs(
                                'onBeforeInput',
                                'beforeinput',
                                null,
                                l,
                                G,
                            )),
                            Q.push({ event: Ae, listeners: me }),
                            (Ae.data = re))),
                    P0(Q, e, T, l, G)
            }
            Sh(Q, t)
        })
    }
    function _u(e, t, l) {
        return { instance: e, listener: t, currentTarget: l }
    }
    function Ii(e, t) {
        for (var l = t + 'Capture', a = []; e !== null; ) {
            var u = e,
                r = u.stateNode
            ;(u = u.tag),
                (u !== 5 && u !== 26 && u !== 27) ||
                    r === null ||
                    ((u = Fn(e, l)),
                    u != null && a.unshift(_u(e, u, r)),
                    (u = Fn(e, t)),
                    u != null && a.push(_u(e, u, r))),
                (e = e.return)
        }
        return a
    }
    function Nn(e) {
        if (e === null) return null
        do e = e.return
        while (e && e.tag !== 5 && e.tag !== 27)
        return e || null
    }
    function Rh(e, t, l, a, u) {
        for (var r = t._reactName, d = []; l !== null && l !== a; ) {
            var y = l,
                b = y.alternate,
                T = y.stateNode
            if (((y = y.tag), b !== null && b === a)) break
            ;(y !== 5 && y !== 26 && y !== 27) ||
                T === null ||
                ((b = T),
                u
                    ? ((T = Fn(l, r)), T != null && d.unshift(_u(l, T, b)))
                    : u || ((T = Fn(l, r)), T != null && d.push(_u(l, T, b)))),
                (l = l.return)
        }
        d.length !== 0 && e.push({ event: t, listeners: d })
    }
    var lv = /\r\n?/g,
        av = /\u0000|\uFFFD/g
    function Th(e) {
        return (typeof e == 'string' ? e : '' + e)
            .replace(
                lv,
                `
`,
            )
            .replace(av, '')
    }
    function xh(e, t) {
        return (t = Th(t)), Th(e) === t
    }
    function er() {}
    function Be(e, t, l, a, u, r) {
        switch (l) {
            case 'children':
                typeof a == 'string'
                    ? t === 'body' || (t === 'textarea' && a === '') || cn(e, a)
                    : (typeof a == 'number' || typeof a == 'bigint') &&
                      t !== 'body' &&
                      cn(e, '' + a)
                break
            case 'className':
                ci(e, 'class', a)
                break
            case 'tabIndex':
                ci(e, 'tabindex', a)
                break
            case 'dir':
            case 'role':
            case 'viewBox':
            case 'width':
            case 'height':
                ci(e, l, a)
                break
            case 'style':
                zs(e, a, r)
                break
            case 'data':
                if (t !== 'object') {
                    ci(e, 'data', a)
                    break
                }
            case 'src':
            case 'href':
                if (a === '' && (t !== 'a' || l !== 'href')) {
                    e.removeAttribute(l)
                    break
                }
                if (
                    a == null ||
                    typeof a == 'function' ||
                    typeof a == 'symbol' ||
                    typeof a == 'boolean'
                ) {
                    e.removeAttribute(l)
                    break
                }
                ;(a = fi('' + a)), e.setAttribute(l, a)
                break
            case 'action':
            case 'formAction':
                if (typeof a == 'function') {
                    e.setAttribute(
                        l,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                    )
                    break
                } else
                    typeof r == 'function' &&
                        (l === 'formAction'
                            ? (t !== 'input' &&
                                  Be(e, t, 'name', u.name, u, null),
                              Be(e, t, 'formEncType', u.formEncType, u, null),
                              Be(e, t, 'formMethod', u.formMethod, u, null),
                              Be(e, t, 'formTarget', u.formTarget, u, null))
                            : (Be(e, t, 'encType', u.encType, u, null),
                              Be(e, t, 'method', u.method, u, null),
                              Be(e, t, 'target', u.target, u, null)))
                if (
                    a == null ||
                    typeof a == 'symbol' ||
                    typeof a == 'boolean'
                ) {
                    e.removeAttribute(l)
                    break
                }
                ;(a = fi('' + a)), e.setAttribute(l, a)
                break
            case 'onClick':
                a != null && (e.onclick = er)
                break
            case 'onScroll':
                a != null && De('scroll', e)
                break
            case 'onScrollEnd':
                a != null && De('scrollend', e)
                break
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a))
                        throw Error(o(61))
                    if (((l = a.__html), l != null)) {
                        if (u.children != null) throw Error(o(60))
                        e.innerHTML = l
                    }
                }
                break
            case 'multiple':
                e.multiple = a && typeof a != 'function' && typeof a != 'symbol'
                break
            case 'muted':
                e.muted = a && typeof a != 'function' && typeof a != 'symbol'
                break
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'defaultValue':
            case 'defaultChecked':
            case 'innerHTML':
            case 'ref':
                break
            case 'autoFocus':
                break
            case 'xlinkHref':
                if (
                    a == null ||
                    typeof a == 'function' ||
                    typeof a == 'boolean' ||
                    typeof a == 'symbol'
                ) {
                    e.removeAttribute('xlink:href')
                    break
                }
                ;(l = fi('' + a)),
                    e.setAttributeNS(
                        'http://www.w3.org/1999/xlink',
                        'xlink:href',
                        l,
                    )
                break
            case 'contentEditable':
            case 'spellCheck':
            case 'draggable':
            case 'value':
            case 'autoReverse':
            case 'externalResourcesRequired':
            case 'focusable':
            case 'preserveAlpha':
                a != null && typeof a != 'function' && typeof a != 'symbol'
                    ? e.setAttribute(l, '' + a)
                    : e.removeAttribute(l)
                break
            case 'inert':
            case 'allowFullScreen':
            case 'async':
            case 'autoPlay':
            case 'controls':
            case 'default':
            case 'defer':
            case 'disabled':
            case 'disablePictureInPicture':
            case 'disableRemotePlayback':
            case 'formNoValidate':
            case 'hidden':
            case 'loop':
            case 'noModule':
            case 'noValidate':
            case 'open':
            case 'playsInline':
            case 'readOnly':
            case 'required':
            case 'reversed':
            case 'scoped':
            case 'seamless':
            case 'itemScope':
                a && typeof a != 'function' && typeof a != 'symbol'
                    ? e.setAttribute(l, '')
                    : e.removeAttribute(l)
                break
            case 'capture':
            case 'download':
                a === !0
                    ? e.setAttribute(l, '')
                    : a !== !1 &&
                        a != null &&
                        typeof a != 'function' &&
                        typeof a != 'symbol'
                      ? e.setAttribute(l, a)
                      : e.removeAttribute(l)
                break
            case 'cols':
            case 'rows':
            case 'size':
            case 'span':
                a != null &&
                typeof a != 'function' &&
                typeof a != 'symbol' &&
                !isNaN(a) &&
                1 <= a
                    ? e.setAttribute(l, a)
                    : e.removeAttribute(l)
                break
            case 'rowSpan':
            case 'start':
                a == null ||
                typeof a == 'function' ||
                typeof a == 'symbol' ||
                isNaN(a)
                    ? e.removeAttribute(l)
                    : e.setAttribute(l, a)
                break
            case 'popover':
                De('beforetoggle', e), De('toggle', e), un(e, 'popover', a)
                break
            case 'xlinkActuate':
                _l(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a)
                break
            case 'xlinkArcrole':
                _l(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a)
                break
            case 'xlinkRole':
                _l(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a)
                break
            case 'xlinkShow':
                _l(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a)
                break
            case 'xlinkTitle':
                _l(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a)
                break
            case 'xlinkType':
                _l(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a)
                break
            case 'xmlBase':
                _l(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a)
                break
            case 'xmlLang':
                _l(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a)
                break
            case 'xmlSpace':
                _l(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a)
                break
            case 'is':
                un(e, 'is', a)
                break
            case 'innerText':
            case 'textContent':
                break
            default:
                ;(!(2 < l.length) ||
                    (l[0] !== 'o' && l[0] !== 'O') ||
                    (l[1] !== 'n' && l[1] !== 'N')) &&
                    ((l = Uy.get(l) || l), un(e, l, a))
        }
    }
    function Do(e, t, l, a, u, r) {
        switch (l) {
            case 'style':
                zs(e, a, r)
                break
            case 'dangerouslySetInnerHTML':
                if (a != null) {
                    if (typeof a != 'object' || !('__html' in a))
                        throw Error(o(61))
                    if (((l = a.__html), l != null)) {
                        if (u.children != null) throw Error(o(60))
                        e.innerHTML = l
                    }
                }
                break
            case 'children':
                typeof a == 'string'
                    ? cn(e, a)
                    : (typeof a == 'number' || typeof a == 'bigint') &&
                      cn(e, '' + a)
                break
            case 'onScroll':
                a != null && De('scroll', e)
                break
            case 'onScrollEnd':
                a != null && De('scrollend', e)
                break
            case 'onClick':
                a != null && (e.onclick = er)
                break
            case 'suppressContentEditableWarning':
            case 'suppressHydrationWarning':
            case 'innerHTML':
            case 'ref':
                break
            case 'innerText':
            case 'textContent':
                break
            default:
                if (!Da.hasOwnProperty(l))
                    e: {
                        if (
                            l[0] === 'o' &&
                            l[1] === 'n' &&
                            ((u = l.endsWith('Capture')),
                            (t = l.slice(2, u ? l.length - 7 : void 0)),
                            (r = e[de] || null),
                            (r = r != null ? r[l] : null),
                            typeof r == 'function' &&
                                e.removeEventListener(t, r, u),
                            typeof a == 'function')
                        ) {
                            typeof r != 'function' &&
                                r !== null &&
                                (l in e
                                    ? (e[l] = null)
                                    : e.hasAttribute(l) &&
                                      e.removeAttribute(l)),
                                e.addEventListener(t, a, u)
                            break e
                        }
                        l in e
                            ? (e[l] = a)
                            : a === !0
                              ? e.setAttribute(l, '')
                              : un(e, l, a)
                    }
        }
    }
    function St(e, t, l) {
        switch (t) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break
            case 'img':
                De('error', e), De('load', e)
                var a = !1,
                    u = !1,
                    r
                for (r in l)
                    if (l.hasOwnProperty(r)) {
                        var d = l[r]
                        if (d != null)
                            switch (r) {
                                case 'src':
                                    a = !0
                                    break
                                case 'srcSet':
                                    u = !0
                                    break
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    throw Error(o(137, t))
                                default:
                                    Be(e, t, r, d, l, null)
                            }
                    }
                u && Be(e, t, 'srcSet', l.srcSet, l, null),
                    a && Be(e, t, 'src', l.src, l, null)
                return
            case 'input':
                De('invalid', e)
                var y = (r = d = u = null),
                    b = null,
                    T = null
                for (a in l)
                    if (l.hasOwnProperty(a)) {
                        var G = l[a]
                        if (G != null)
                            switch (a) {
                                case 'name':
                                    u = G
                                    break
                                case 'type':
                                    d = G
                                    break
                                case 'checked':
                                    b = G
                                    break
                                case 'defaultChecked':
                                    T = G
                                    break
                                case 'value':
                                    r = G
                                    break
                                case 'defaultValue':
                                    y = G
                                    break
                                case 'children':
                                case 'dangerouslySetInnerHTML':
                                    if (G != null) throw Error(o(137, t))
                                    break
                                default:
                                    Be(e, t, a, G, l, null)
                            }
                    }
                Ms(e, r, y, b, T, d, u, !1), oi(e)
                return
            case 'select':
                De('invalid', e), (a = d = r = null)
                for (u in l)
                    if (l.hasOwnProperty(u) && ((y = l[u]), y != null))
                        switch (u) {
                            case 'value':
                                r = y
                                break
                            case 'defaultValue':
                                d = y
                                break
                            case 'multiple':
                                a = y
                            default:
                                Be(e, t, u, y, l, null)
                        }
                ;(t = r),
                    (l = d),
                    (e.multiple = !!a),
                    t != null
                        ? rn(e, !!a, t, !1)
                        : l != null && rn(e, !!a, l, !0)
                return
            case 'textarea':
                De('invalid', e), (r = u = a = null)
                for (d in l)
                    if (l.hasOwnProperty(d) && ((y = l[d]), y != null))
                        switch (d) {
                            case 'value':
                                a = y
                                break
                            case 'defaultValue':
                                u = y
                                break
                            case 'children':
                                r = y
                                break
                            case 'dangerouslySetInnerHTML':
                                if (y != null) throw Error(o(91))
                                break
                            default:
                                Be(e, t, d, y, l, null)
                        }
                _s(e, a, u, r), oi(e)
                return
            case 'option':
                for (b in l)
                    if (l.hasOwnProperty(b) && ((a = l[b]), a != null))
                        switch (b) {
                            case 'selected':
                                e.selected =
                                    a &&
                                    typeof a != 'function' &&
                                    typeof a != 'symbol'
                                break
                            default:
                                Be(e, t, b, a, l, null)
                        }
                return
            case 'dialog':
                De('cancel', e), De('close', e)
                break
            case 'iframe':
            case 'object':
                De('load', e)
                break
            case 'video':
            case 'audio':
                for (a = 0; a < Cu.length; a++) De(Cu[a], e)
                break
            case 'image':
                De('error', e), De('load', e)
                break
            case 'details':
                De('toggle', e)
                break
            case 'embed':
            case 'source':
            case 'link':
                De('error', e), De('load', e)
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (T in l)
                    if (l.hasOwnProperty(T) && ((a = l[T]), a != null))
                        switch (T) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                throw Error(o(137, t))
                            default:
                                Be(e, t, T, a, l, null)
                        }
                return
            default:
                if (Xr(t)) {
                    for (G in l)
                        l.hasOwnProperty(G) &&
                            ((a = l[G]),
                            a !== void 0 && Do(e, t, G, a, l, void 0))
                    return
                }
        }
        for (y in l)
            l.hasOwnProperty(y) &&
                ((a = l[y]), a != null && Be(e, t, y, a, l, null))
    }
    function nv(e, t, l, a) {
        switch (t) {
            case 'div':
            case 'span':
            case 'svg':
            case 'path':
            case 'a':
            case 'g':
            case 'p':
            case 'li':
                break
            case 'input':
                var u = null,
                    r = null,
                    d = null,
                    y = null,
                    b = null,
                    T = null,
                    G = null
                for (B in l) {
                    var Q = l[B]
                    if (l.hasOwnProperty(B) && Q != null)
                        switch (B) {
                            case 'checked':
                                break
                            case 'value':
                                break
                            case 'defaultValue':
                                b = Q
                            default:
                                a.hasOwnProperty(B) || Be(e, t, B, null, a, Q)
                        }
                }
                for (var N in a) {
                    var B = a[N]
                    if (
                        ((Q = l[N]),
                        a.hasOwnProperty(N) && (B != null || Q != null))
                    )
                        switch (N) {
                            case 'type':
                                r = B
                                break
                            case 'name':
                                u = B
                                break
                            case 'checked':
                                T = B
                                break
                            case 'defaultChecked':
                                G = B
                                break
                            case 'value':
                                d = B
                                break
                            case 'defaultValue':
                                y = B
                                break
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (B != null) throw Error(o(137, t))
                                break
                            default:
                                B !== Q && Be(e, t, N, B, a, Q)
                        }
                }
                Yr(e, d, y, b, T, G, r, u)
                return
            case 'select':
                B = d = y = N = null
                for (r in l)
                    if (((b = l[r]), l.hasOwnProperty(r) && b != null))
                        switch (r) {
                            case 'value':
                                break
                            case 'multiple':
                                B = b
                            default:
                                a.hasOwnProperty(r) || Be(e, t, r, null, a, b)
                        }
                for (u in a)
                    if (
                        ((r = a[u]),
                        (b = l[u]),
                        a.hasOwnProperty(u) && (r != null || b != null))
                    )
                        switch (u) {
                            case 'value':
                                N = r
                                break
                            case 'defaultValue':
                                y = r
                                break
                            case 'multiple':
                                d = r
                            default:
                                r !== b && Be(e, t, u, r, a, b)
                        }
                ;(t = y),
                    (l = d),
                    (a = B),
                    N != null
                        ? rn(e, !!l, N, !1)
                        : !!a != !!l &&
                          (t != null
                              ? rn(e, !!l, t, !0)
                              : rn(e, !!l, l ? [] : '', !1))
                return
            case 'textarea':
                B = N = null
                for (y in l)
                    if (
                        ((u = l[y]),
                        l.hasOwnProperty(y) &&
                            u != null &&
                            !a.hasOwnProperty(y))
                    )
                        switch (y) {
                            case 'value':
                                break
                            case 'children':
                                break
                            default:
                                Be(e, t, y, null, a, u)
                        }
                for (d in a)
                    if (
                        ((u = a[d]),
                        (r = l[d]),
                        a.hasOwnProperty(d) && (u != null || r != null))
                    )
                        switch (d) {
                            case 'value':
                                N = u
                                break
                            case 'defaultValue':
                                B = u
                                break
                            case 'children':
                                break
                            case 'dangerouslySetInnerHTML':
                                if (u != null) throw Error(o(91))
                                break
                            default:
                                u !== r && Be(e, t, d, u, a, r)
                        }
                Cs(e, N, B)
                return
            case 'option':
                for (var ue in l)
                    if (
                        ((N = l[ue]),
                        l.hasOwnProperty(ue) &&
                            N != null &&
                            !a.hasOwnProperty(ue))
                    )
                        switch (ue) {
                            case 'selected':
                                e.selected = !1
                                break
                            default:
                                Be(e, t, ue, null, a, N)
                        }
                for (b in a)
                    if (
                        ((N = a[b]),
                        (B = l[b]),
                        a.hasOwnProperty(b) &&
                            N !== B &&
                            (N != null || B != null))
                    )
                        switch (b) {
                            case 'selected':
                                e.selected =
                                    N &&
                                    typeof N != 'function' &&
                                    typeof N != 'symbol'
                                break
                            default:
                                Be(e, t, b, N, a, B)
                        }
                return
            case 'img':
            case 'link':
            case 'area':
            case 'base':
            case 'br':
            case 'col':
            case 'embed':
            case 'hr':
            case 'keygen':
            case 'meta':
            case 'param':
            case 'source':
            case 'track':
            case 'wbr':
            case 'menuitem':
                for (var ge in l)
                    (N = l[ge]),
                        l.hasOwnProperty(ge) &&
                            N != null &&
                            !a.hasOwnProperty(ge) &&
                            Be(e, t, ge, null, a, N)
                for (T in a)
                    if (
                        ((N = a[T]),
                        (B = l[T]),
                        a.hasOwnProperty(T) &&
                            N !== B &&
                            (N != null || B != null))
                    )
                        switch (T) {
                            case 'children':
                            case 'dangerouslySetInnerHTML':
                                if (N != null) throw Error(o(137, t))
                                break
                            default:
                                Be(e, t, T, N, a, B)
                        }
                return
            default:
                if (Xr(t)) {
                    for (var et in l)
                        (N = l[et]),
                            l.hasOwnProperty(et) &&
                                N !== void 0 &&
                                !a.hasOwnProperty(et) &&
                                Do(e, t, et, void 0, a, N)
                    for (G in a)
                        (N = a[G]),
                            (B = l[G]),
                            !a.hasOwnProperty(G) ||
                                N === B ||
                                (N === void 0 && B === void 0) ||
                                Do(e, t, G, N, a, B)
                    return
                }
        }
        for (var w in l)
            (N = l[w]),
                l.hasOwnProperty(w) &&
                    N != null &&
                    !a.hasOwnProperty(w) &&
                    Be(e, t, w, null, a, N)
        for (Q in a)
            (N = a[Q]),
                (B = l[Q]),
                !a.hasOwnProperty(Q) ||
                    N === B ||
                    (N == null && B == null) ||
                    Be(e, t, Q, N, a, B)
    }
    var wo = null,
        Mo = null
    function tr(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Ah(e) {
        switch (e) {
            case 'http://www.w3.org/2000/svg':
                return 1
            case 'http://www.w3.org/1998/Math/MathML':
                return 2
            default:
                return 0
        }
    }
    function Oh(e, t) {
        if (e === 0)
            switch (t) {
                case 'svg':
                    return 1
                case 'math':
                    return 2
                default:
                    return 0
            }
        return e === 1 && t === 'foreignObject' ? 0 : e
    }
    function Co(e, t) {
        return (
            e === 'textarea' ||
            e === 'noscript' ||
            typeof t.children == 'string' ||
            typeof t.children == 'number' ||
            typeof t.children == 'bigint' ||
            (typeof t.dangerouslySetInnerHTML == 'object' &&
                t.dangerouslySetInnerHTML !== null &&
                t.dangerouslySetInnerHTML.__html != null)
        )
    }
    var _o = null
    function uv() {
        var e = window.event
        return e && e.type === 'popstate'
            ? e === _o
                ? !1
                : ((_o = e), !0)
            : ((_o = null), !1)
    }
    var Dh = typeof setTimeout == 'function' ? setTimeout : void 0,
        iv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
        wh = typeof Promise == 'function' ? Promise : void 0,
        rv =
            typeof queueMicrotask == 'function'
                ? queueMicrotask
                : typeof wh < 'u'
                  ? function (e) {
                        return wh.resolve(null).then(e).catch(cv)
                    }
                  : Dh
    function cv(e) {
        setTimeout(function () {
            throw e
        })
    }
    function Uo(e, t) {
        var l = t,
            a = 0
        do {
            var u = l.nextSibling
            if ((e.removeChild(l), u && u.nodeType === 8))
                if (((l = u.data), l === '/$')) {
                    if (a === 0) {
                        e.removeChild(u), qu(t)
                        return
                    }
                    a--
                } else (l !== '$' && l !== '$?' && l !== '$!') || a++
            l = u
        } while (l)
        qu(t)
    }
    function zo(e) {
        var t = e.firstChild
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var l = t
            switch (((t = t.nextSibling), l.nodeName)) {
                case 'HTML':
                case 'HEAD':
                case 'BODY':
                    zo(l), wl(l)
                    continue
                case 'SCRIPT':
                case 'STYLE':
                    continue
                case 'LINK':
                    if (l.rel.toLowerCase() === 'stylesheet') continue
            }
            e.removeChild(l)
        }
    }
    function ov(e, t, l, a) {
        for (; e.nodeType === 1; ) {
            var u = l
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break
            } else if (a) {
                if (!e[Qt])
                    switch (t) {
                        case 'meta':
                            if (!e.hasAttribute('itemprop')) break
                            return e
                        case 'link':
                            if (
                                ((r = e.getAttribute('rel')),
                                r === 'stylesheet' &&
                                    e.hasAttribute('data-precedence'))
                            )
                                break
                            if (
                                r !== u.rel ||
                                e.getAttribute('href') !==
                                    (u.href == null ? null : u.href) ||
                                e.getAttribute('crossorigin') !==
                                    (u.crossOrigin == null
                                        ? null
                                        : u.crossOrigin) ||
                                e.getAttribute('title') !==
                                    (u.title == null ? null : u.title)
                            )
                                break
                            return e
                        case 'style':
                            if (e.hasAttribute('data-precedence')) break
                            return e
                        case 'script':
                            if (
                                ((r = e.getAttribute('src')),
                                (r !== (u.src == null ? null : u.src) ||
                                    e.getAttribute('type') !==
                                        (u.type == null ? null : u.type) ||
                                    e.getAttribute('crossorigin') !==
                                        (u.crossOrigin == null
                                            ? null
                                            : u.crossOrigin)) &&
                                    r &&
                                    e.hasAttribute('async') &&
                                    !e.hasAttribute('itemprop'))
                            )
                                break
                            return e
                        default:
                            return e
                    }
            } else if (t === 'input' && e.type === 'hidden') {
                var r = u.name == null ? null : '' + u.name
                if (u.type === 'hidden' && e.getAttribute('name') === r)
                    return e
            } else return e
            if (((e = sl(e.nextSibling)), e === null)) break
        }
        return null
    }
    function sv(e, t, l) {
        if (t === '') return null
        for (; e.nodeType !== 3; )
            if (
                ((e.nodeType !== 1 ||
                    e.nodeName !== 'INPUT' ||
                    e.type !== 'hidden') &&
                    !l) ||
                ((e = sl(e.nextSibling)), e === null)
            )
                return null
        return e
    }
    function sl(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType
            if (t === 1 || t === 3) break
            if (t === 8) {
                if (
                    ((t = e.data),
                    t === '$' ||
                        t === '$!' ||
                        t === '$?' ||
                        t === 'F!' ||
                        t === 'F')
                )
                    break
                if (t === '/$') return null
            }
        }
        return e
    }
    function Mh(e) {
        e = e.previousSibling
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data
                if (l === '$' || l === '$!' || l === '$?') {
                    if (t === 0) return e
                    t--
                } else l === '/$' && t++
            }
            e = e.previousSibling
        }
        return null
    }
    function Ch(e, t, l) {
        switch (((t = tr(l)), e)) {
            case 'html':
                if (((e = t.documentElement), !e)) throw Error(o(452))
                return e
            case 'head':
                if (((e = t.head), !e)) throw Error(o(453))
                return e
            case 'body':
                if (((e = t.body), !e)) throw Error(o(454))
                return e
            default:
                throw Error(o(451))
        }
    }
    var al = new Map(),
        _h = new Set()
    function lr(e) {
        return typeof e.getRootNode == 'function'
            ? e.getRootNode()
            : e.ownerDocument
    }
    var Kl = P.d
    P.d = { f: fv, r: dv, D: hv, C: mv, L: yv, m: vv, X: gv, S: pv, M: bv }
    function fv() {
        var e = Kl.f(),
            t = Ji()
        return e || t
    }
    function dv(e) {
        var t = pt(e)
        t !== null && t.tag === 5 && t.type === 'form' ? nd(t) : Kl.r(e)
    }
    var jn = typeof document > 'u' ? null : document
    function Uh(e, t, l) {
        var a = jn
        if (a && typeof t == 'string' && t) {
            var u = kt(t)
            ;(u = 'link[rel="' + e + '"][href="' + u + '"]'),
                typeof l == 'string' && (u += '[crossorigin="' + l + '"]'),
                _h.has(u) ||
                    (_h.add(u),
                    (e = { rel: e, crossOrigin: l, href: t }),
                    a.querySelector(u) === null &&
                        ((t = a.createElement('link')),
                        St(t, 'link', e),
                        Ge(t),
                        a.head.appendChild(t)))
        }
    }
    function hv(e) {
        Kl.D(e), Uh('dns-prefetch', e, null)
    }
    function mv(e, t) {
        Kl.C(e, t), Uh('preconnect', e, t)
    }
    function yv(e, t, l) {
        Kl.L(e, t, l)
        var a = jn
        if (a && e && t) {
            var u = 'link[rel="preload"][as="' + kt(t) + '"]'
            t === 'image' && l && l.imageSrcSet
                ? ((u += '[imagesrcset="' + kt(l.imageSrcSet) + '"]'),
                  typeof l.imageSizes == 'string' &&
                      (u += '[imagesizes="' + kt(l.imageSizes) + '"]'))
                : (u += '[href="' + kt(e) + '"]')
            var r = u
            switch (t) {
                case 'style':
                    r = Ln(e)
                    break
                case 'script':
                    r = Hn(e)
            }
            al.has(r) ||
                ((e = fe(
                    {
                        rel: 'preload',
                        href: t === 'image' && l && l.imageSrcSet ? void 0 : e,
                        as: t,
                    },
                    l,
                )),
                al.set(r, e),
                a.querySelector(u) !== null ||
                    (t === 'style' && a.querySelector(Uu(r))) ||
                    (t === 'script' && a.querySelector(zu(r))) ||
                    ((t = a.createElement('link')),
                    St(t, 'link', e),
                    Ge(t),
                    a.head.appendChild(t)))
        }
    }
    function vv(e, t) {
        Kl.m(e, t)
        var l = jn
        if (l && e) {
            var a = t && typeof t.as == 'string' ? t.as : 'script',
                u =
                    'link[rel="modulepreload"][as="' +
                    kt(a) +
                    '"][href="' +
                    kt(e) +
                    '"]',
                r = u
            switch (a) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                    r = Hn(e)
            }
            if (
                !al.has(r) &&
                ((e = fe({ rel: 'modulepreload', href: e }, t)),
                al.set(r, e),
                l.querySelector(u) === null)
            ) {
                switch (a) {
                    case 'audioworklet':
                    case 'paintworklet':
                    case 'serviceworker':
                    case 'sharedworker':
                    case 'worker':
                    case 'script':
                        if (l.querySelector(zu(r))) return
                }
                ;(a = l.createElement('link')),
                    St(a, 'link', e),
                    Ge(a),
                    l.head.appendChild(a)
            }
        }
    }
    function pv(e, t, l) {
        Kl.S(e, t, l)
        var a = jn
        if (a && e) {
            var u = Zt(a).hoistableStyles,
                r = Ln(e)
            t = t || 'default'
            var d = u.get(r)
            if (!d) {
                var y = { loading: 0, preload: null }
                if ((d = a.querySelector(Uu(r)))) y.loading = 5
                else {
                    ;(e = fe(
                        { rel: 'stylesheet', href: e, 'data-precedence': t },
                        l,
                    )),
                        (l = al.get(r)) && No(e, l)
                    var b = (d = a.createElement('link'))
                    Ge(b),
                        St(b, 'link', e),
                        (b._p = new Promise(function (T, G) {
                            ;(b.onload = T), (b.onerror = G)
                        })),
                        b.addEventListener('load', function () {
                            y.loading |= 1
                        }),
                        b.addEventListener('error', function () {
                            y.loading |= 2
                        }),
                        (y.loading |= 4),
                        ar(d, t, a)
                }
                ;(d = { type: 'stylesheet', instance: d, count: 1, state: y }),
                    u.set(r, d)
            }
        }
    }
    function gv(e, t) {
        Kl.X(e, t)
        var l = jn
        if (l && e) {
            var a = Zt(l).hoistableScripts,
                u = Hn(e),
                r = a.get(u)
            r ||
                ((r = l.querySelector(zu(u))),
                r ||
                    ((e = fe({ src: e, async: !0 }, t)),
                    (t = al.get(u)) && jo(e, t),
                    (r = l.createElement('script')),
                    Ge(r),
                    St(r, 'link', e),
                    l.head.appendChild(r)),
                (r = { type: 'script', instance: r, count: 1, state: null }),
                a.set(u, r))
        }
    }
    function bv(e, t) {
        Kl.M(e, t)
        var l = jn
        if (l && e) {
            var a = Zt(l).hoistableScripts,
                u = Hn(e),
                r = a.get(u)
            r ||
                ((r = l.querySelector(zu(u))),
                r ||
                    ((e = fe({ src: e, async: !0, type: 'module' }, t)),
                    (t = al.get(u)) && jo(e, t),
                    (r = l.createElement('script')),
                    Ge(r),
                    St(r, 'link', e),
                    l.head.appendChild(r)),
                (r = { type: 'script', instance: r, count: 1, state: null }),
                a.set(u, r))
        }
    }
    function zh(e, t, l, a) {
        var u = (u = ml.current) ? lr(u) : null
        if (!u) throw Error(o(446))
        switch (e) {
            case 'meta':
            case 'title':
                return null
            case 'style':
                return typeof l.precedence == 'string' &&
                    typeof l.href == 'string'
                    ? ((t = Ln(l.href)),
                      (l = Zt(u).hoistableStyles),
                      (a = l.get(t)),
                      a ||
                          ((a = {
                              type: 'style',
                              instance: null,
                              count: 0,
                              state: null,
                          }),
                          l.set(t, a)),
                      a)
                    : { type: 'void', instance: null, count: 0, state: null }
            case 'link':
                if (
                    l.rel === 'stylesheet' &&
                    typeof l.href == 'string' &&
                    typeof l.precedence == 'string'
                ) {
                    e = Ln(l.href)
                    var r = Zt(u).hoistableStyles,
                        d = r.get(e)
                    if (
                        (d ||
                            ((u = u.ownerDocument || u),
                            (d = {
                                type: 'stylesheet',
                                instance: null,
                                count: 0,
                                state: { loading: 0, preload: null },
                            }),
                            r.set(e, d),
                            (r = u.querySelector(Uu(e))) &&
                                !r._p &&
                                ((d.instance = r), (d.state.loading = 5)),
                            al.has(e) ||
                                ((l = {
                                    rel: 'preload',
                                    as: 'style',
                                    href: l.href,
                                    crossOrigin: l.crossOrigin,
                                    integrity: l.integrity,
                                    media: l.media,
                                    hrefLang: l.hrefLang,
                                    referrerPolicy: l.referrerPolicy,
                                }),
                                al.set(e, l),
                                r || Sv(u, e, l, d.state))),
                        t && a === null)
                    )
                        throw Error(o(528, ''))
                    return d
                }
                if (t && a !== null) throw Error(o(529, ''))
                return null
            case 'script':
                return (
                    (t = l.async),
                    (l = l.src),
                    typeof l == 'string' &&
                    t &&
                    typeof t != 'function' &&
                    typeof t != 'symbol'
                        ? ((t = Hn(l)),
                          (l = Zt(u).hoistableScripts),
                          (a = l.get(t)),
                          a ||
                              ((a = {
                                  type: 'script',
                                  instance: null,
                                  count: 0,
                                  state: null,
                              }),
                              l.set(t, a)),
                          a)
                        : {
                              type: 'void',
                              instance: null,
                              count: 0,
                              state: null,
                          }
                )
            default:
                throw Error(o(444, e))
        }
    }
    function Ln(e) {
        return 'href="' + kt(e) + '"'
    }
    function Uu(e) {
        return 'link[rel="stylesheet"][' + e + ']'
    }
    function Nh(e) {
        return fe({}, e, { 'data-precedence': e.precedence, precedence: null })
    }
    function Sv(e, t, l, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + ']')
            ? (a.loading = 1)
            : ((t = e.createElement('link')),
              (a.preload = t),
              t.addEventListener('load', function () {
                  return (a.loading |= 1)
              }),
              t.addEventListener('error', function () {
                  return (a.loading |= 2)
              }),
              St(t, 'link', l),
              Ge(t),
              e.head.appendChild(t))
    }
    function Hn(e) {
        return '[src="' + kt(e) + '"]'
    }
    function zu(e) {
        return 'script[async]' + e
    }
    function jh(e, t, l) {
        if ((t.count++, t.instance === null))
            switch (t.type) {
                case 'style':
                    var a = e.querySelector(
                        'style[data-href~="' + kt(l.href) + '"]',
                    )
                    if (a) return (t.instance = a), Ge(a), a
                    var u = fe({}, l, {
                        'data-href': l.href,
                        'data-precedence': l.precedence,
                        href: null,
                        precedence: null,
                    })
                    return (
                        (a = (e.ownerDocument || e).createElement('style')),
                        Ge(a),
                        St(a, 'style', u),
                        ar(a, l.precedence, e),
                        (t.instance = a)
                    )
                case 'stylesheet':
                    u = Ln(l.href)
                    var r = e.querySelector(Uu(u))
                    if (r)
                        return (
                            (t.state.loading |= 4), (t.instance = r), Ge(r), r
                        )
                    ;(a = Nh(l)),
                        (u = al.get(u)) && No(a, u),
                        (r = (e.ownerDocument || e).createElement('link')),
                        Ge(r)
                    var d = r
                    return (
                        (d._p = new Promise(function (y, b) {
                            ;(d.onload = y), (d.onerror = b)
                        })),
                        St(r, 'link', a),
                        (t.state.loading |= 4),
                        ar(r, l.precedence, e),
                        (t.instance = r)
                    )
                case 'script':
                    return (
                        (r = Hn(l.src)),
                        (u = e.querySelector(zu(r)))
                            ? ((t.instance = u), Ge(u), u)
                            : ((a = l),
                              (u = al.get(r)) && ((a = fe({}, l)), jo(a, u)),
                              (e = e.ownerDocument || e),
                              (u = e.createElement('script')),
                              Ge(u),
                              St(u, 'link', a),
                              e.head.appendChild(u),
                              (t.instance = u))
                    )
                case 'void':
                    return null
                default:
                    throw Error(o(443, t.type))
            }
        else
            t.type === 'stylesheet' &&
                (t.state.loading & 4) === 0 &&
                ((a = t.instance),
                (t.state.loading |= 4),
                ar(a, l.precedence, e))
        return t.instance
    }
    function ar(e, t, l) {
        for (
            var a = l.querySelectorAll(
                    'link[rel="stylesheet"][data-precedence],style[data-precedence]',
                ),
                u = a.length ? a[a.length - 1] : null,
                r = u,
                d = 0;
            d < a.length;
            d++
        ) {
            var y = a[d]
            if (y.dataset.precedence === t) r = y
            else if (r !== u) break
        }
        r
            ? r.parentNode.insertBefore(e, r.nextSibling)
            : ((t = l.nodeType === 9 ? l.head : l),
              t.insertBefore(e, t.firstChild))
    }
    function No(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.title == null && (e.title = t.title)
    }
    function jo(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.integrity == null && (e.integrity = t.integrity)
    }
    var nr = null
    function Lh(e, t, l) {
        if (nr === null) {
            var a = new Map(),
                u = (nr = new Map())
            u.set(l, a)
        } else (u = nr), (a = u.get(l)), a || ((a = new Map()), u.set(l, a))
        if (a.has(e)) return a
        for (
            a.set(e, null), l = l.getElementsByTagName(e), u = 0;
            u < l.length;
            u++
        ) {
            var r = l[u]
            if (
                !(
                    r[Qt] ||
                    r[ne] ||
                    (e === 'link' && r.getAttribute('rel') === 'stylesheet')
                ) &&
                r.namespaceURI !== 'http://www.w3.org/2000/svg'
            ) {
                var d = r.getAttribute(t) || ''
                d = e + d
                var y = a.get(d)
                y ? y.push(r) : a.set(d, [r])
            }
        }
        return a
    }
    function Hh(e, t, l) {
        ;(e = e.ownerDocument || e),
            e.head.insertBefore(
                l,
                t === 'title' ? e.querySelector('head > title') : null,
            )
    }
    function Ev(e, t, l) {
        if (l === 1 || t.itemProp != null) return !1
        switch (e) {
            case 'meta':
            case 'title':
                return !0
            case 'style':
                if (
                    typeof t.precedence != 'string' ||
                    typeof t.href != 'string' ||
                    t.href === ''
                )
                    break
                return !0
            case 'link':
                if (
                    typeof t.rel != 'string' ||
                    typeof t.href != 'string' ||
                    t.href === '' ||
                    t.onLoad ||
                    t.onError
                )
                    break
                switch (t.rel) {
                    case 'stylesheet':
                        return (
                            (e = t.disabled),
                            typeof t.precedence == 'string' && e == null
                        )
                    default:
                        return !0
                }
            case 'script':
                if (
                    t.async &&
                    typeof t.async != 'function' &&
                    typeof t.async != 'symbol' &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    typeof t.src == 'string'
                )
                    return !0
        }
        return !1
    }
    function Bh(e) {
        return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0)
    }
    var Nu = null
    function Rv() {}
    function Tv(e, t, l) {
        if (Nu === null) throw Error(o(475))
        var a = Nu
        if (
            t.type === 'stylesheet' &&
            (typeof l.media != 'string' ||
                matchMedia(l.media).matches !== !1) &&
            (t.state.loading & 4) === 0
        ) {
            if (t.instance === null) {
                var u = Ln(l.href),
                    r = e.querySelector(Uu(u))
                if (r) {
                    ;(e = r._p),
                        e !== null &&
                            typeof e == 'object' &&
                            typeof e.then == 'function' &&
                            (a.count++, (a = ur.bind(a)), e.then(a, a)),
                        (t.state.loading |= 4),
                        (t.instance = r),
                        Ge(r)
                    return
                }
                ;(r = e.ownerDocument || e),
                    (l = Nh(l)),
                    (u = al.get(u)) && No(l, u),
                    (r = r.createElement('link')),
                    Ge(r)
                var d = r
                ;(d._p = new Promise(function (y, b) {
                    ;(d.onload = y), (d.onerror = b)
                })),
                    St(r, 'link', l),
                    (t.instance = r)
            }
            a.stylesheets === null && (a.stylesheets = new Map()),
                a.stylesheets.set(t, e),
                (e = t.state.preload) &&
                    (t.state.loading & 3) === 0 &&
                    (a.count++,
                    (t = ur.bind(a)),
                    e.addEventListener('load', t),
                    e.addEventListener('error', t))
        }
    }
    function xv() {
        if (Nu === null) throw Error(o(475))
        var e = Nu
        return (
            e.stylesheets && e.count === 0 && Lo(e, e.stylesheets),
            0 < e.count
                ? function (t) {
                      var l = setTimeout(function () {
                          if (
                              (e.stylesheets && Lo(e, e.stylesheets),
                              e.unsuspend)
                          ) {
                              var a = e.unsuspend
                              ;(e.unsuspend = null), a()
                          }
                      }, 6e4)
                      return (
                          (e.unsuspend = t),
                          function () {
                              ;(e.unsuspend = null), clearTimeout(l)
                          }
                      )
                  }
                : null
        )
    }
    function ur() {
        if ((this.count--, this.count === 0)) {
            if (this.stylesheets) Lo(this, this.stylesheets)
            else if (this.unsuspend) {
                var e = this.unsuspend
                ;(this.unsuspend = null), e()
            }
        }
    }
    var ir = null
    function Lo(e, t) {
        ;(e.stylesheets = null),
            e.unsuspend !== null &&
                (e.count++,
                (ir = new Map()),
                t.forEach(Av, e),
                (ir = null),
                ur.call(e))
    }
    function Av(e, t) {
        if (!(t.state.loading & 4)) {
            var l = ir.get(e)
            if (l) var a = l.get(null)
            else {
                ;(l = new Map()), ir.set(e, l)
                for (
                    var u = e.querySelectorAll(
                            'link[data-precedence],style[data-precedence]',
                        ),
                        r = 0;
                    r < u.length;
                    r++
                ) {
                    var d = u[r]
                    ;(d.nodeName === 'LINK' ||
                        d.getAttribute('media') !== 'not all') &&
                        (l.set(d.dataset.precedence, d), (a = d))
                }
                a && l.set(null, a)
            }
            ;(u = t.instance),
                (d = u.getAttribute('data-precedence')),
                (r = l.get(d) || a),
                r === a && l.set(null, u),
                l.set(d, u),
                this.count++,
                (a = ur.bind(this)),
                u.addEventListener('load', a),
                u.addEventListener('error', a),
                r
                    ? r.parentNode.insertBefore(u, r.nextSibling)
                    : ((e = e.nodeType === 9 ? e.head : e),
                      e.insertBefore(u, e.firstChild)),
                (t.state.loading |= 4)
        }
    }
    var ju = {
        $$typeof: D,
        Provider: null,
        Consumer: null,
        _currentValue: Te,
        _currentValue2: Te,
        _threadCount: 0,
    }
    function Ov(e, t, l, a, u, r, d, y) {
        ;(this.tag = 1),
            (this.containerInfo = e),
            (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                    null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
                this.next =
                this.pendingContext =
                this.context =
                this.cancelPendingCommit =
                    null),
            (this.callbackPriority = 0),
            (this.expirationTimes = M(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.finishedLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = M(0)),
            (this.hiddenUpdates = M(null)),
            (this.identifierPrefix = a),
            (this.onUncaughtError = u),
            (this.onCaughtError = r),
            (this.onRecoverableError = d),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = y),
            (this.incompleteTransitions = new Map())
    }
    function qh(e, t, l, a, u, r, d, y, b, T, G, Q) {
        return (
            (e = new Ov(e, t, l, d, y, b, T, Q)),
            (t = 1),
            r === !0 && (t |= 24),
            (r = tl(3, null, null, t)),
            (e.current = r),
            (r.stateNode = e),
            (t = hc()),
            t.refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (r.memoizedState = { element: a, isDehydrated: l, cache: t }),
            kc(r),
            e
        )
    }
    function Yh(e) {
        return e ? ((e = yn), e) : yn
    }
    function Gh(e, t, l, a, u, r) {
        ;(u = Yh(u)),
            a.context === null ? (a.context = u) : (a.pendingContext = u),
            (a = ia(t)),
            (a.payload = { element: l }),
            (r = r === void 0 ? null : r),
            r !== null && (a.callback = r),
            (l = ra(e, a, t)),
            l !== null && (Mt(l, e, t), gu(l, e, t))
    }
    function Xh(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var l = e.retryLane
            e.retryLane = l !== 0 && l < t ? l : t
        }
    }
    function Ho(e, t) {
        Xh(e, t), (e = e.alternate) && Xh(e, t)
    }
    function Vh(e) {
        if (e.tag === 13) {
            var t = Il(e, 67108864)
            t !== null && Mt(t, e, 67108864), Ho(e, 67108864)
        }
    }
    var rr = !0
    function Dv(e, t, l, a) {
        var u = k.T
        k.T = null
        var r = P.p
        try {
            ;(P.p = 2), Bo(e, t, l, a)
        } finally {
            ;(P.p = r), (k.T = u)
        }
    }
    function wv(e, t, l, a) {
        var u = k.T
        k.T = null
        var r = P.p
        try {
            ;(P.p = 8), Bo(e, t, l, a)
        } finally {
            ;(P.p = r), (k.T = u)
        }
    }
    function Bo(e, t, l, a) {
        if (rr) {
            var u = qo(a)
            if (u === null) Oo(e, t, a, cr, l), Zh(e, a)
            else if (Cv(u, e, t, l, a)) a.stopPropagation()
            else if ((Zh(e, a), t & 4 && -1 < Mv.indexOf(e))) {
                for (; u !== null; ) {
                    var r = pt(u)
                    if (r !== null)
                        switch (r.tag) {
                            case 3:
                                if (
                                    ((r = r.stateNode),
                                    r.current.memoizedState.isDehydrated)
                                ) {
                                    var d = vl(r.pendingLanes)
                                    if (d !== 0) {
                                        var y = r
                                        for (
                                            y.pendingLanes |= 2,
                                                y.entangledLanes |= 2;
                                            d;

                                        ) {
                                            var b = 1 << (31 - ot(d))
                                            ;(y.entanglements[1] |= b),
                                                (d &= ~b)
                                        }
                                        Rl(r),
                                            (Fe & 6) === 0 &&
                                                ((Zi = Nt() + 500), Mu(0))
                                    }
                                }
                                break
                            case 13:
                                ;(y = Il(r, 2)),
                                    y !== null && Mt(y, r, 2),
                                    Ji(),
                                    Ho(r, 2)
                        }
                    if (
                        ((r = qo(a)), r === null && Oo(e, t, a, cr, l), r === u)
                    )
                        break
                    u = r
                }
                u !== null && a.stopPropagation()
            } else Oo(e, t, a, null, l)
        }
    }
    function qo(e) {
        return (e = Qr(e)), Yo(e)
    }
    var cr = null
    function Yo(e) {
        if (((cr = null), (e = vt(e)), e !== null)) {
            var t = se(e)
            if (t === null) e = null
            else {
                var l = t.tag
                if (l === 13) {
                    if (((e = _e(t)), e !== null)) return e
                    e = null
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null
                    e = null
                } else t !== e && (e = null)
            }
        }
        return (cr = e), null
    }
    function Qh(e) {
        switch (e) {
            case 'beforetoggle':
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'toggle':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
                return 2
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
                return 8
            case 'message':
                switch (Kn()) {
                    case ul:
                        return 2
                    case Vt:
                        return 8
                    case xa:
                    case kn:
                        return 32
                    case ai:
                        return 268435456
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Go = !1,
        ma = null,
        ya = null,
        va = null,
        Lu = new Map(),
        Hu = new Map(),
        pa = [],
        Mv =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
                ' ',
            )
    function Zh(e, t) {
        switch (e) {
            case 'focusin':
            case 'focusout':
                ma = null
                break
            case 'dragenter':
            case 'dragleave':
                ya = null
                break
            case 'mouseover':
            case 'mouseout':
                va = null
                break
            case 'pointerover':
            case 'pointerout':
                Lu.delete(t.pointerId)
                break
            case 'gotpointercapture':
            case 'lostpointercapture':
                Hu.delete(t.pointerId)
        }
    }
    function Bu(e, t, l, a, u, r) {
        return e === null || e.nativeEvent !== r
            ? ((e = {
                  blockedOn: t,
                  domEventName: l,
                  eventSystemFlags: a,
                  nativeEvent: r,
                  targetContainers: [u],
              }),
              t !== null && ((t = pt(t)), t !== null && Vh(t)),
              e)
            : ((e.eventSystemFlags |= a),
              (t = e.targetContainers),
              u !== null && t.indexOf(u) === -1 && t.push(u),
              e)
    }
    function Cv(e, t, l, a, u) {
        switch (t) {
            case 'focusin':
                return (ma = Bu(ma, e, t, l, a, u)), !0
            case 'dragenter':
                return (ya = Bu(ya, e, t, l, a, u)), !0
            case 'mouseover':
                return (va = Bu(va, e, t, l, a, u)), !0
            case 'pointerover':
                var r = u.pointerId
                return Lu.set(r, Bu(Lu.get(r) || null, e, t, l, a, u)), !0
            case 'gotpointercapture':
                return (
                    (r = u.pointerId),
                    Hu.set(r, Bu(Hu.get(r) || null, e, t, l, a, u)),
                    !0
                )
        }
        return !1
    }
    function Kh(e) {
        var t = vt(e.target)
        if (t !== null) {
            var l = se(t)
            if (l !== null) {
                if (((t = l.tag), t === 13)) {
                    if (((t = _e(l)), t !== null)) {
                        ;(e.blockedOn = t),
                            ae(e.priority, function () {
                                if (l.tag === 13) {
                                    var a = qt(),
                                        u = Il(l, a)
                                    u !== null && Mt(u, l, a), Ho(l, a)
                                }
                            })
                        return
                    }
                } else if (
                    t === 3 &&
                    l.stateNode.current.memoizedState.isDehydrated
                ) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function or(e) {
        if (e.blockedOn !== null) return !1
        for (var t = e.targetContainers; 0 < t.length; ) {
            var l = qo(e.nativeEvent)
            if (l === null) {
                l = e.nativeEvent
                var a = new l.constructor(l.type, l)
                ;(Vr = a), l.target.dispatchEvent(a), (Vr = null)
            } else
                return (t = pt(l)), t !== null && Vh(t), (e.blockedOn = l), !1
            t.shift()
        }
        return !0
    }
    function kh(e, t, l) {
        or(e) && l.delete(t)
    }
    function _v() {
        ;(Go = !1),
            ma !== null && or(ma) && (ma = null),
            ya !== null && or(ya) && (ya = null),
            va !== null && or(va) && (va = null),
            Lu.forEach(kh),
            Hu.forEach(kh)
    }
    function sr(e, t) {
        e.blockedOn === t &&
            ((e.blockedOn = null),
            Go ||
                ((Go = !0),
                n.unstable_scheduleCallback(n.unstable_NormalPriority, _v)))
    }
    var fr = null
    function Jh(e) {
        fr !== e &&
            ((fr = e),
            n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
                fr === e && (fr = null)
                for (var t = 0; t < e.length; t += 3) {
                    var l = e[t],
                        a = e[t + 1],
                        u = e[t + 2]
                    if (typeof a != 'function') {
                        if (Yo(a || l) === null) continue
                        break
                    }
                    var r = pt(l)
                    r !== null &&
                        (e.splice(t, 3),
                        (t -= 3),
                        Mc(
                            r,
                            {
                                pending: !0,
                                data: u,
                                method: l.method,
                                action: a,
                            },
                            a,
                            u,
                        ))
                }
            }))
    }
    function qu(e) {
        function t(b) {
            return sr(b, e)
        }
        ma !== null && sr(ma, e),
            ya !== null && sr(ya, e),
            va !== null && sr(va, e),
            Lu.forEach(t),
            Hu.forEach(t)
        for (var l = 0; l < pa.length; l++) {
            var a = pa[l]
            a.blockedOn === e && (a.blockedOn = null)
        }
        for (; 0 < pa.length && ((l = pa[0]), l.blockedOn === null); )
            Kh(l), l.blockedOn === null && pa.shift()
        if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
            for (a = 0; a < l.length; a += 3) {
                var u = l[a],
                    r = l[a + 1],
                    d = u[de] || null
                if (typeof r == 'function') d || Jh(l)
                else if (d) {
                    var y = null
                    if (r && r.hasAttribute('formAction')) {
                        if (((u = r), (d = r[de] || null))) y = d.formAction
                        else if (Yo(u) !== null) continue
                    } else y = d.action
                    typeof y == 'function'
                        ? (l[a + 1] = y)
                        : (l.splice(a, 3), (a -= 3)),
                        Jh(l)
                }
            }
    }
    function Xo(e) {
        this._internalRoot = e
    }
    ;(dr.prototype.render = Xo.prototype.render =
        function (e) {
            var t = this._internalRoot
            if (t === null) throw Error(o(409))
            var l = t.current,
                a = qt()
            Gh(l, a, e, t, null, null)
        }),
        (dr.prototype.unmount = Xo.prototype.unmount =
            function () {
                var e = this._internalRoot
                if (e !== null) {
                    this._internalRoot = null
                    var t = e.containerInfo
                    e.tag === 0 && Un(),
                        Gh(e.current, 2, null, e, null, null),
                        Ji(),
                        (t[je] = null)
                }
            })
    function dr(e) {
        this._internalRoot = e
    }
    dr.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = ee()
            e = { blockedOn: null, target: e, priority: t }
            for (
                var l = 0;
                l < pa.length && t !== 0 && t < pa[l].priority;
                l++
            );
            pa.splice(l, 0, e), l === 0 && Kh(e)
        }
    }
    var Fh = i.version
    if (Fh !== '19.0.0') throw Error(o(527, Fh, '19.0.0'))
    P.findDOMNode = function (e) {
        var t = e._reactInternals
        if (t === void 0)
            throw typeof e.render == 'function'
                ? Error(o(188))
                : ((e = Object.keys(e).join(',')), Error(o(268, e)))
        return (
            (e = Z(t)),
            (e = e !== null ? ce(e) : null),
            (e = e === null ? null : e.stateNode),
            e
        )
    }
    var Uv = {
        bundleType: 0,
        version: '19.0.0',
        rendererPackageName: 'react-dom',
        currentDispatcherRef: k,
        findFiberByHostInstance: vt,
        reconcilerVersion: '19.0.0',
    }
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
        var hr = __REACT_DEVTOOLS_GLOBAL_HOOK__
        if (!hr.isDisabled && hr.supportsFiber)
            try {
                ;(Wl = hr.inject(Uv)), (Rt = hr)
            } catch {}
    }
    return (
        (Gu.createRoot = function (e, t) {
            if (!s(e)) throw Error(o(299))
            var l = !1,
                a = '',
                u = dd,
                r = hd,
                d = md,
                y = null
            return (
                t != null &&
                    (t.unstable_strictMode === !0 && (l = !0),
                    t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
                    t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
                    t.onCaughtError !== void 0 && (r = t.onCaughtError),
                    t.onRecoverableError !== void 0 &&
                        (d = t.onRecoverableError),
                    t.unstable_transitionCallbacks !== void 0 &&
                        (y = t.unstable_transitionCallbacks)),
                (t = qh(e, 1, !1, null, null, l, a, u, r, d, y, null)),
                (e[je] = t.current),
                Ao(e.nodeType === 8 ? e.parentNode : e),
                new Xo(t)
            )
        }),
        (Gu.hydrateRoot = function (e, t, l) {
            if (!s(e)) throw Error(o(299))
            var a = !1,
                u = '',
                r = dd,
                d = hd,
                y = md,
                b = null,
                T = null
            return (
                l != null &&
                    (l.unstable_strictMode === !0 && (a = !0),
                    l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
                    l.onUncaughtError !== void 0 && (r = l.onUncaughtError),
                    l.onCaughtError !== void 0 && (d = l.onCaughtError),
                    l.onRecoverableError !== void 0 &&
                        (y = l.onRecoverableError),
                    l.unstable_transitionCallbacks !== void 0 &&
                        (b = l.unstable_transitionCallbacks),
                    l.formState !== void 0 && (T = l.formState)),
                (t = qh(e, 1, !0, t, l ?? null, a, u, r, d, y, b, T)),
                (t.context = Yh(null)),
                (l = t.current),
                (a = qt()),
                (u = ia(a)),
                (u.callback = null),
                ra(l, u, a),
                (t.current.lanes = a),
                j(t, a),
                Rl(t),
                (e[je] = t.current),
                Ao(e),
                new dr(t)
            )
        }),
        (Gu.version = '19.0.0'),
        Gu
    )
}
var um
function Xv() {
    if (um) return Qo.exports
    um = 1
    function n() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (i) {
                console.error(i)
            }
    }
    return n(), (Qo.exports = Gv()), Qo.exports
}
var Vv = Xv()
const Qv = Nv(Vv)
var _ = fs(),
    Xu = {},
    im
function Zv() {
    if (im) return Xu
    ;(im = 1),
        Object.defineProperty(Xu, '__esModule', { value: !0 }),
        (Xu.parse = h),
        (Xu.serialize = m)
    const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
        i = /^[\u0021-\u003A\u003C-\u007E]*$/,
        c =
            /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
        o = /^[\u0020-\u003A\u003D-\u007E]*$/,
        s = Object.prototype.toString,
        f = (() => {
            const O = function () {}
            return (O.prototype = Object.create(null)), O
        })()
    function h(O, D) {
        const A = new f(),
            Y = O.length
        if (Y < 2) return A
        const z = (D == null ? void 0 : D.decode) || g
        let q = 0
        do {
            const V = O.indexOf('=', q)
            if (V === -1) break
            const $ = O.indexOf(';', q),
                oe = $ === -1 ? Y : $
            if (V > oe) {
                q = O.lastIndexOf(';', V - 1) + 1
                continue
            }
            const F = v(O, q, V),
                C = p(O, V, F),
                he = O.slice(F, C)
            if (A[he] === void 0) {
                let be = v(O, V + 1, oe),
                    k = p(O, oe, be)
                const fe = z(O.slice(be, k))
                A[he] = fe
            }
            q = oe + 1
        } while (q < Y)
        return A
    }
    function v(O, D, A) {
        do {
            const Y = O.charCodeAt(D)
            if (Y !== 32 && Y !== 9) return D
        } while (++D < A)
        return A
    }
    function p(O, D, A) {
        for (; D > A; ) {
            const Y = O.charCodeAt(--D)
            if (Y !== 32 && Y !== 9) return D + 1
        }
        return A
    }
    function m(O, D, A) {
        const Y = (A == null ? void 0 : A.encode) || encodeURIComponent
        if (!n.test(O)) throw new TypeError(`argument name is invalid: ${O}`)
        const z = Y(D)
        if (!i.test(z)) throw new TypeError(`argument val is invalid: ${D}`)
        let q = O + '=' + z
        if (!A) return q
        if (A.maxAge !== void 0) {
            if (!Number.isInteger(A.maxAge))
                throw new TypeError(`option maxAge is invalid: ${A.maxAge}`)
            q += '; Max-Age=' + A.maxAge
        }
        if (A.domain) {
            if (!c.test(A.domain))
                throw new TypeError(`option domain is invalid: ${A.domain}`)
            q += '; Domain=' + A.domain
        }
        if (A.path) {
            if (!o.test(A.path))
                throw new TypeError(`option path is invalid: ${A.path}`)
            q += '; Path=' + A.path
        }
        if (A.expires) {
            if (!x(A.expires) || !Number.isFinite(A.expires.valueOf()))
                throw new TypeError(`option expires is invalid: ${A.expires}`)
            q += '; Expires=' + A.expires.toUTCString()
        }
        if (
            (A.httpOnly && (q += '; HttpOnly'),
            A.secure && (q += '; Secure'),
            A.partitioned && (q += '; Partitioned'),
            A.priority)
        )
            switch (
                typeof A.priority == 'string'
                    ? A.priority.toLowerCase()
                    : void 0
            ) {
                case 'low':
                    q += '; Priority=Low'
                    break
                case 'medium':
                    q += '; Priority=Medium'
                    break
                case 'high':
                    q += '; Priority=High'
                    break
                default:
                    throw new TypeError(
                        `option priority is invalid: ${A.priority}`,
                    )
            }
        if (A.sameSite)
            switch (
                typeof A.sameSite == 'string'
                    ? A.sameSite.toLowerCase()
                    : A.sameSite
            ) {
                case !0:
                case 'strict':
                    q += '; SameSite=Strict'
                    break
                case 'lax':
                    q += '; SameSite=Lax'
                    break
                case 'none':
                    q += '; SameSite=None'
                    break
                default:
                    throw new TypeError(
                        `option sameSite is invalid: ${A.sameSite}`,
                    )
            }
        return q
    }
    function g(O) {
        if (O.indexOf('%') === -1) return O
        try {
            return decodeURIComponent(O)
        } catch {
            return O
        }
    }
    function x(O) {
        return s.call(O) === '[object Date]'
    }
    return Xu
}
Zv()
/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var rm = 'popstate'
function Kv(n = {}) {
    function i(o, s) {
        let { pathname: f, search: h, hash: v } = o.location
        return Fu(
            '',
            { pathname: f, search: h, hash: v },
            (s.state && s.state.usr) || null,
            (s.state && s.state.key) || 'default',
        )
    }
    function c(o, s) {
        return typeof s == 'string' ? s : Ea(s)
    }
    return Jv(i, c, null, n)
}
function we(n, i) {
    if (n === !1 || n === null || typeof n > 'u') throw new Error(i)
}
function Et(n, i) {
    if (!n) {
        typeof console < 'u' && console.warn(i)
        try {
            throw new Error(i)
        } catch {}
    }
}
function kv() {
    return Math.random().toString(36).substring(2, 10)
}
function cm(n, i) {
    return { usr: n.state, key: n.key, idx: i }
}
function Fu(n, i, c = null, o) {
    return {
        pathname: typeof n == 'string' ? n : n.pathname,
        search: '',
        hash: '',
        ...(typeof i == 'string' ? Ra(i) : i),
        state: c,
        key: (i && i.key) || o || kv(),
    }
}
function Ea({ pathname: n = '/', search: i = '', hash: c = '' }) {
    return (
        i && i !== '?' && (n += i.charAt(0) === '?' ? i : '?' + i),
        c && c !== '#' && (n += c.charAt(0) === '#' ? c : '#' + c),
        n
    )
}
function Ra(n) {
    let i = {}
    if (n) {
        let c = n.indexOf('#')
        c >= 0 && ((i.hash = n.substring(c)), (n = n.substring(0, c)))
        let o = n.indexOf('?')
        o >= 0 && ((i.search = n.substring(o)), (n = n.substring(0, o))),
            n && (i.pathname = n)
    }
    return i
}
function Jv(n, i, c, o = {}) {
    let { window: s = document.defaultView, v5Compat: f = !1 } = o,
        h = s.history,
        v = 'POP',
        p = null,
        m = g()
    m == null && ((m = 0), h.replaceState({ ...h.state, idx: m }, ''))
    function g() {
        return (h.state || { idx: null }).idx
    }
    function x() {
        v = 'POP'
        let z = g(),
            q = z == null ? null : z - m
        ;(m = z), p && p({ action: v, location: Y.location, delta: q })
    }
    function O(z, q) {
        v = 'PUSH'
        let V = Fu(Y.location, z, q)
        m = g() + 1
        let $ = cm(V, m),
            oe = Y.createHref(V)
        try {
            h.pushState($, '', oe)
        } catch (F) {
            if (F instanceof DOMException && F.name === 'DataCloneError')
                throw F
            s.location.assign(oe)
        }
        f && p && p({ action: v, location: Y.location, delta: 1 })
    }
    function D(z, q) {
        v = 'REPLACE'
        let V = Fu(Y.location, z, q)
        m = g()
        let $ = cm(V, m),
            oe = Y.createHref(V)
        h.replaceState($, '', oe),
            f && p && p({ action: v, location: Y.location, delta: 0 })
    }
    function A(z) {
        let q =
                s.location.origin !== 'null'
                    ? s.location.origin
                    : s.location.href,
            V = typeof z == 'string' ? z : Ea(z)
        return (
            (V = V.replace(/ $/, '%20')),
            we(
                q,
                `No window.location.(origin|href) available to create URL for href: ${V}`,
            ),
            new URL(V, q)
        )
    }
    let Y = {
        get action() {
            return v
        },
        get location() {
            return n(s, h)
        },
        listen(z) {
            if (p) throw new Error('A history only accepts one active listener')
            return (
                s.addEventListener(rm, x),
                (p = z),
                () => {
                    s.removeEventListener(rm, x), (p = null)
                }
            )
        },
        createHref(z) {
            return i(s, z)
        },
        createURL: A,
        encodeLocation(z) {
            let q = A(z)
            return { pathname: q.pathname, search: q.search, hash: q.hash }
        },
        push: O,
        replace: D,
        go(z) {
            return h.go(z)
        },
    }
    return Y
}
var Fv = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function $v(n) {
    return n.index === !0
}
function Rr(n, i, c = [], o = {}) {
    return n.map((s, f) => {
        let h = [...c, String(f)],
            v = typeof s.id == 'string' ? s.id : h.join('-')
        if (
            (we(
                s.index !== !0 || !s.children,
                'Cannot specify children on an index route',
            ),
            we(
                !o[v],
                `Found a route id collision on id "${v}".  Route id's must be globally unique within Data Router usages`,
            ),
            $v(s))
        ) {
            let p = { ...s, ...i(s), id: v }
            return (o[v] = p), p
        } else {
            let p = { ...s, ...i(s), id: v, children: void 0 }
            return (
                (o[v] = p),
                s.children && (p.children = Rr(s.children, i, h, o)),
                p
            )
        }
    })
}
function Sa(n, i, c = '/') {
    return vr(n, i, c, !1)
}
function vr(n, i, c, o) {
    let s = typeof i == 'string' ? Ra(i) : i,
        f = dl(s.pathname || '/', c)
    if (f == null) return null
    let h = Gm(n)
    Pv(h)
    let v = null
    for (let p = 0; v == null && p < h.length; ++p) {
        let m = op(f)
        v = rp(h[p], m, o)
    }
    return v
}
function Wv(n, i) {
    let { route: c, pathname: o, params: s } = n
    return { id: c.id, pathname: o, params: s, data: i[c.id], handle: c.handle }
}
function Gm(n, i = [], c = [], o = '') {
    let s = (f, h, v) => {
        let p = {
            relativePath: v === void 0 ? f.path || '' : v,
            caseSensitive: f.caseSensitive === !0,
            childrenIndex: h,
            route: f,
        }
        p.relativePath.startsWith('/') &&
            (we(
                p.relativePath.startsWith(o),
                `Absolute route path "${p.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
            ),
            (p.relativePath = p.relativePath.slice(o.length)))
        let m = xl([o, p.relativePath]),
            g = c.concat(p)
        f.children &&
            f.children.length > 0 &&
            (we(
                f.index !== !0,
                `Index routes must not have child routes. Please remove all child routes from route path "${m}".`,
            ),
            Gm(f.children, i, g, m)),
            !(f.path == null && !f.index) &&
                i.push({ path: m, score: up(m, f.index), routesMeta: g })
    }
    return (
        n.forEach((f, h) => {
            var v
            if (f.path === '' || !((v = f.path) != null && v.includes('?')))
                s(f, h)
            else for (let p of Xm(f.path)) s(f, h, p)
        }),
        i
    )
}
function Xm(n) {
    let i = n.split('/')
    if (i.length === 0) return []
    let [c, ...o] = i,
        s = c.endsWith('?'),
        f = c.replace(/\?$/, '')
    if (o.length === 0) return s ? [f, ''] : [f]
    let h = Xm(o.join('/')),
        v = []
    return (
        v.push(...h.map((p) => (p === '' ? f : [f, p].join('/')))),
        s && v.push(...h),
        v.map((p) => (n.startsWith('/') && p === '' ? '/' : p))
    )
}
function Pv(n) {
    n.sort((i, c) =>
        i.score !== c.score
            ? c.score - i.score
            : ip(
                  i.routesMeta.map((o) => o.childrenIndex),
                  c.routesMeta.map((o) => o.childrenIndex),
              ),
    )
}
var Iv = /^:[\w-]+$/,
    ep = 3,
    tp = 2,
    lp = 1,
    ap = 10,
    np = -2,
    om = (n) => n === '*'
function up(n, i) {
    let c = n.split('/'),
        o = c.length
    return (
        c.some(om) && (o += np),
        i && (o += tp),
        c
            .filter((s) => !om(s))
            .reduce((s, f) => s + (Iv.test(f) ? ep : f === '' ? lp : ap), o)
    )
}
function ip(n, i) {
    return n.length === i.length && n.slice(0, -1).every((o, s) => o === i[s])
        ? n[n.length - 1] - i[i.length - 1]
        : 0
}
function rp(n, i, c = !1) {
    let { routesMeta: o } = n,
        s = {},
        f = '/',
        h = []
    for (let v = 0; v < o.length; ++v) {
        let p = o[v],
            m = v === o.length - 1,
            g = f === '/' ? i : i.slice(f.length) || '/',
            x = Tr(
                {
                    path: p.relativePath,
                    caseSensitive: p.caseSensitive,
                    end: m,
                },
                g,
            ),
            O = p.route
        if (
            (!x &&
                m &&
                c &&
                !o[o.length - 1].route.index &&
                (x = Tr(
                    {
                        path: p.relativePath,
                        caseSensitive: p.caseSensitive,
                        end: !1,
                    },
                    g,
                )),
            !x)
        )
            return null
        Object.assign(s, x.params),
            h.push({
                params: s,
                pathname: xl([f, x.pathname]),
                pathnameBase: dp(xl([f, x.pathnameBase])),
                route: O,
            }),
            x.pathnameBase !== '/' && (f = xl([f, x.pathnameBase]))
    }
    return h
}
function Tr(n, i) {
    typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 })
    let [c, o] = cp(n.path, n.caseSensitive, n.end),
        s = i.match(c)
    if (!s) return null
    let f = s[0],
        h = f.replace(/(.)\/+$/, '$1'),
        v = s.slice(1)
    return {
        params: o.reduce((m, { paramName: g, isOptional: x }, O) => {
            if (g === '*') {
                let A = v[O] || ''
                h = f.slice(0, f.length - A.length).replace(/(.)\/+$/, '$1')
            }
            const D = v[O]
            return (
                x && !D
                    ? (m[g] = void 0)
                    : (m[g] = (D || '').replace(/%2F/g, '/')),
                m
            )
        }, {}),
        pathname: f,
        pathnameBase: h,
        pattern: n,
    }
}
function cp(n, i = !1, c = !0) {
    Et(
        n === '*' || !n.endsWith('*') || n.endsWith('/*'),
        `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, '/*')}".`,
    )
    let o = [],
        s =
            '^' +
            n
                .replace(/\/*\*?$/, '')
                .replace(/^\/*/, '/')
                .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (h, v, p) => (
                        o.push({ paramName: v, isOptional: p != null }),
                        p ? '/?([^\\/]+)?' : '/([^\\/]+)'
                    ),
                )
    return (
        n.endsWith('*')
            ? (o.push({ paramName: '*' }),
              (s += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
            : c
              ? (s += '\\/*$')
              : n !== '' && n !== '/' && (s += '(?:(?=\\/|$))'),
        [new RegExp(s, i ? void 0 : 'i'), o]
    )
}
function op(n) {
    try {
        return n
            .split('/')
            .map((i) => decodeURIComponent(i).replace(/\//g, '%2F'))
            .join('/')
    } catch (i) {
        return (
            Et(
                !1,
                `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`,
            ),
            n
        )
    }
}
function dl(n, i) {
    if (i === '/') return n
    if (!n.toLowerCase().startsWith(i.toLowerCase())) return null
    let c = i.endsWith('/') ? i.length - 1 : i.length,
        o = n.charAt(c)
    return o && o !== '/' ? null : n.slice(c) || '/'
}
function sp(n, i = '/') {
    let {
        pathname: c,
        search: o = '',
        hash: s = '',
    } = typeof n == 'string' ? Ra(n) : n
    return {
        pathname: c ? (c.startsWith('/') ? c : fp(c, i)) : i,
        search: hp(o),
        hash: mp(s),
    }
}
function fp(n, i) {
    let c = i.replace(/\/+$/, '').split('/')
    return (
        n.split('/').forEach((s) => {
            s === '..' ? c.length > 1 && c.pop() : s !== '.' && c.push(s)
        }),
        c.length > 1 ? c.join('/') : '/'
    )
}
function Fo(n, i, c, o) {
    return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Vm(n) {
    return n.filter(
        (i, c) => c === 0 || (i.route.path && i.route.path.length > 0),
    )
}
function ds(n) {
    let i = Vm(n)
    return i.map((c, o) => (o === i.length - 1 ? c.pathname : c.pathnameBase))
}
function hs(n, i, c, o = !1) {
    let s
    typeof n == 'string'
        ? (s = Ra(n))
        : ((s = { ...n }),
          we(
              !s.pathname || !s.pathname.includes('?'),
              Fo('?', 'pathname', 'search', s),
          ),
          we(
              !s.pathname || !s.pathname.includes('#'),
              Fo('#', 'pathname', 'hash', s),
          ),
          we(
              !s.search || !s.search.includes('#'),
              Fo('#', 'search', 'hash', s),
          ))
    let f = n === '' || s.pathname === '',
        h = f ? '/' : s.pathname,
        v
    if (h == null) v = c
    else {
        let x = i.length - 1
        if (!o && h.startsWith('..')) {
            let O = h.split('/')
            for (; O[0] === '..'; ) O.shift(), (x -= 1)
            s.pathname = O.join('/')
        }
        v = x >= 0 ? i[x] : '/'
    }
    let p = sp(s, v),
        m = h && h !== '/' && h.endsWith('/'),
        g = (f || h === '.') && c.endsWith('/')
    return !p.pathname.endsWith('/') && (m || g) && (p.pathname += '/'), p
}
var xl = (n) => n.join('/').replace(/\/\/+/g, '/'),
    dp = (n) => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
    hp = (n) => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
    mp = (n) => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n),
    xr = class {
        constructor(n, i, c, o = !1) {
            ;(this.status = n),
                (this.statusText = i || ''),
                (this.internal = o),
                c instanceof Error
                    ? ((this.data = c.toString()), (this.error = c))
                    : (this.data = c)
        }
    }
function $u(n) {
    return (
        n != null &&
        typeof n.status == 'number' &&
        typeof n.statusText == 'string' &&
        typeof n.internal == 'boolean' &&
        'data' in n
    )
}
var Qm = ['POST', 'PUT', 'PATCH', 'DELETE'],
    yp = new Set(Qm),
    vp = ['GET', ...Qm],
    pp = new Set(vp),
    gp = new Set([301, 302, 303, 307, 308]),
    bp = new Set([307, 308]),
    $o = {
        state: 'idle',
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
    },
    Sp = {
        state: 'idle',
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
    },
    Vu = {
        state: 'unblocked',
        proceed: void 0,
        reset: void 0,
        location: void 0,
    },
    ms = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Ep = (n) => ({ hasErrorBoundary: !!n.hasErrorBoundary }),
    Zm = 'remix-router-transitions',
    Km = Symbol('ResetLoaderData')
function Rp(n) {
    const i = n.window ? n.window : typeof window < 'u' ? window : void 0,
        c =
            typeof i < 'u' &&
            typeof i.document < 'u' &&
            typeof i.document.createElement < 'u'
    we(
        n.routes.length > 0,
        'You must provide a non-empty routes array to createRouter',
    )
    let o = n.mapRouteProperties || Ep,
        s = {},
        f = Rr(n.routes, o, void 0, s),
        h,
        v = n.basename || '/',
        p = n.dataStrategy || Dp,
        m = n.patchRoutesOnNavigation,
        g = { ...n.future },
        x = null,
        O = new Set(),
        D = null,
        A = null,
        Y = null,
        z = n.hydrationData != null,
        q = Sa(f, n.history.location, v),
        V = !1,
        $ = null
    if (q == null && !m) {
        let E = nl(404, { pathname: n.history.location.pathname }),
            { matches: M, route: j } = Sm(f)
        ;(q = M), ($ = { [j.id]: E })
    }
    q &&
        !n.hydrationData &&
        Dl(q, f, n.history.location.pathname).active &&
        (q = null)
    let oe
    if (q)
        if (q.some((E) => E.route.lazy)) oe = !1
        else if (!q.some((E) => E.route.loader)) oe = !0
        else {
            let E = n.hydrationData ? n.hydrationData.loaderData : null,
                M = n.hydrationData ? n.hydrationData.errors : null
            if (M) {
                let j = q.findIndex((K) => M[K.route.id] !== void 0)
                oe = q.slice(0, j + 1).every((K) => !as(K.route, E, M))
            } else oe = q.every((j) => !as(j.route, E, M))
        }
    else {
        ;(oe = !1), (q = [])
        let E = Dl(null, f, n.history.location.pathname)
        E.active && E.matches && ((V = !0), (q = E.matches))
    }
    let F,
        C = {
            historyAction: n.history.action,
            location: n.history.location,
            matches: q,
            initialized: oe,
            navigation: $o,
            restoreScrollPosition: n.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: 'idle',
            loaderData: (n.hydrationData && n.hydrationData.loaderData) || {},
            actionData: (n.hydrationData && n.hydrationData.actionData) || null,
            errors: (n.hydrationData && n.hydrationData.errors) || $,
            fetchers: new Map(),
            blockers: new Map(),
        },
        he = 'POP',
        be = !1,
        k,
        fe = !1,
        Le = new Map(),
        Ot = null,
        Dt = !1,
        ht = !1,
        it = new Set(),
        J = new Map(),
        ve = 0,
        se = -1,
        _e = new Map(),
        S = new Set(),
        Z = new Map(),
        ce = new Map(),
        le = new Set(),
        P = new Map(),
        Te,
        pe = null
    function mt() {
        if (
            ((x = n.history.listen(({ action: E, location: M, delta: j }) => {
                if (Te) {
                    Te(), (Te = void 0)
                    return
                }
                Et(
                    P.size === 0 || j != null,
                    'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
                )
                let K = ui({
                    currentLocation: C.location,
                    nextLocation: M,
                    historyAction: E,
                })
                if (K && j != null) {
                    let I = new Promise((ie) => {
                        Te = ie
                    })
                    n.history.go(j * -1),
                        ot(K, {
                            state: 'blocked',
                            location: M,
                            proceed() {
                                ot(K, {
                                    state: 'proceeding',
                                    proceed: void 0,
                                    reset: void 0,
                                    location: M,
                                }),
                                    I.then(() => n.history.go(j))
                            },
                            reset() {
                                let ie = new Map(C.blockers)
                                ie.set(K, Vu), Re({ blockers: ie })
                            },
                        })
                    return
                }
                return Xt(E, M)
            })),
            c)
        ) {
            Bp(i, Le)
            let E = () => qp(i, Le)
            i.addEventListener('pagehide', E),
                (Ot = () => i.removeEventListener('pagehide', E))
        }
        return (
            C.initialized || Xt('POP', C.location, { initialHydration: !0 }), F
        )
    }
    function Ue() {
        x && x(),
            Ot && Ot(),
            O.clear(),
            k && k.abort(),
            C.fetchers.forEach((E, M) => kn(M)),
            C.blockers.forEach((E, M) => il(M))
    }
    function $e(E) {
        return O.add(E), () => O.delete(E)
    }
    function Re(E, M = {}) {
        C = { ...C, ...E }
        let j = [],
            K = []
        C.fetchers.forEach((I, ie) => {
            I.state === 'idle' && (le.has(ie) ? j.push(ie) : K.push(ie))
        }),
            le.forEach((I) => {
                !C.fetchers.has(I) && !J.has(I) && j.push(I)
            }),
            [...O].forEach((I) =>
                I(C, {
                    deletedFetchers: j,
                    viewTransitionOpts: M.viewTransitionOpts,
                    flushSync: M.flushSync === !0,
                }),
            ),
            j.forEach((I) => kn(I)),
            K.forEach((I) => C.fetchers.delete(I))
    }
    function yt(E, M, { flushSync: j } = {}) {
        var W, ne
        let K =
                C.actionData != null &&
                C.navigation.formMethod != null &&
                fl(C.navigation.formMethod) &&
                C.navigation.state === 'loading' &&
                ((W = E.state) == null ? void 0 : W._isRedirect) !== !0,
            I
        M.actionData
            ? Object.keys(M.actionData).length > 0
                ? (I = M.actionData)
                : (I = null)
            : K
              ? (I = C.actionData)
              : (I = null)
        let ie = M.loaderData
                ? gm(C.loaderData, M.loaderData, M.matches || [], M.errors)
                : C.loaderData,
            ye = C.blockers
        ye.size > 0 &&
            ((ye = new Map(ye)), ye.forEach((de, je) => ye.set(je, Vu)))
        let ee =
            be === !0 ||
            (C.navigation.formMethod != null &&
                fl(C.navigation.formMethod) &&
                ((ne = E.state) == null ? void 0 : ne._isRedirect) !== !0)
        h && ((f = h), (h = void 0)),
            Dt ||
                he === 'POP' ||
                (he === 'PUSH'
                    ? n.history.push(E, E.state)
                    : he === 'REPLACE' && n.history.replace(E, E.state))
        let ae
        if (he === 'POP') {
            let de = Le.get(C.location.pathname)
            de && de.has(E.pathname)
                ? (ae = { currentLocation: C.location, nextLocation: E })
                : Le.has(E.pathname) &&
                  (ae = { currentLocation: E, nextLocation: C.location })
        } else if (fe) {
            let de = Le.get(C.location.pathname)
            de
                ? de.add(E.pathname)
                : ((de = new Set([E.pathname])),
                  Le.set(C.location.pathname, de)),
                (ae = { currentLocation: C.location, nextLocation: E })
        }
        Re(
            {
                ...M,
                actionData: I,
                loaderData: ie,
                historyAction: he,
                location: E,
                initialized: !0,
                navigation: $o,
                revalidation: 'idle',
                restoreScrollPosition: vl(E, M.matches || C.matches),
                preventScrollReset: ee,
                blockers: ye,
            },
            { viewTransitionOpts: ae, flushSync: j === !0 },
        ),
            (he = 'POP'),
            (be = !1),
            (fe = !1),
            (Dt = !1),
            (ht = !1),
            pe == null || pe.resolve(),
            (pe = null)
    }
    async function Fl(E, M) {
        if (typeof E == 'number') {
            n.history.go(E)
            return
        }
        let j = ls(
                C.location,
                C.matches,
                v,
                E,
                M == null ? void 0 : M.fromRouteId,
                M == null ? void 0 : M.relative,
            ),
            { path: K, submission: I, error: ie } = sm(!1, j, M),
            ye = C.location,
            ee = Fu(C.location, K, M && M.state)
        ee = { ...ee, ...n.history.encodeLocation(ee) }
        let ae = M && M.replace != null ? M.replace : void 0,
            W = 'PUSH'
        ae === !0
            ? (W = 'REPLACE')
            : ae === !1 ||
              (I != null &&
                  fl(I.formMethod) &&
                  I.formAction === C.location.pathname + C.location.search &&
                  (W = 'REPLACE'))
        let ne =
                M && 'preventScrollReset' in M
                    ? M.preventScrollReset === !0
                    : void 0,
            de = (M && M.flushSync) === !0,
            je = ui({ currentLocation: ye, nextLocation: ee, historyAction: W })
        if (je) {
            ot(je, {
                state: 'blocked',
                location: ee,
                proceed() {
                    ot(je, {
                        state: 'proceeding',
                        proceed: void 0,
                        reset: void 0,
                        location: ee,
                    }),
                        Fl(E, M)
                },
                reset() {
                    let tt = new Map(C.blockers)
                    tt.set(je, Vu), Re({ blockers: tt })
                },
            })
            return
        }
        await Xt(W, ee, {
            submission: I,
            pendingError: ie,
            preventScrollReset: ne,
            replace: M && M.replace,
            enableViewTransition: M && M.viewTransition,
            flushSync: de,
        })
    }
    function ml() {
        pe || (pe = Yp()), Kn(), Re({ revalidation: 'loading' })
        let E = pe.promise
        return C.navigation.state === 'submitting'
            ? E
            : C.navigation.state === 'idle'
              ? (Xt(C.historyAction, C.location, {
                    startUninterruptedRevalidation: !0,
                }),
                E)
              : (Xt(he || C.historyAction, C.navigation.location, {
                    overrideNavigation: C.navigation,
                    enableViewTransition: fe === !0,
                }),
                E)
    }
    async function Xt(E, M, j) {
        k && k.abort(),
            (k = null),
            (he = E),
            (Dt = (j && j.startUninterruptedRevalidation) === !0),
            nn(C.location, C.matches),
            (be = (j && j.preventScrollReset) === !0),
            (fe = (j && j.enableViewTransition) === !0)
        let K = h || f,
            I = j && j.overrideNavigation,
            ie =
                j != null &&
                j.initialHydration &&
                C.matches &&
                C.matches.length > 0 &&
                !V
                    ? C.matches
                    : Sa(K, M, v),
            ye = (j && j.flushSync) === !0
        if (
            ie &&
            C.initialized &&
            !ht &&
            zp(C.location, M) &&
            !(j && j.submission && fl(j.submission.formMethod))
        ) {
            yt(M, { matches: ie }, { flushSync: ye })
            return
        }
        let ee = Dl(ie, K, M.pathname)
        if ((ee.active && ee.matches && (ie = ee.matches), !ie)) {
            let { error: Qe, notFoundMatches: qe, route: We } = Jn(M.pathname)
            yt(
                M,
                { matches: qe, loaderData: {}, errors: { [We.id]: Qe } },
                { flushSync: ye },
            )
            return
        }
        k = new AbortController()
        let ae = Bn(n.history, M, k.signal, j && j.submission),
            W
        if (j && j.pendingError)
            W = [Ja(ie).route.id, { type: 'error', error: j.pendingError }]
        else if (j && j.submission && fl(j.submission.formMethod)) {
            let Qe = await tn(ae, M, j.submission, ie, ee.active, {
                replace: j.replace,
                flushSync: ye,
            })
            if (Qe.shortCircuited) return
            if (Qe.pendingActionResult) {
                let [qe, We] = Qe.pendingActionResult
                if (Yt(We) && $u(We.error) && We.error.status === 404) {
                    ;(k = null),
                        yt(M, {
                            matches: Qe.matches,
                            loaderData: {},
                            errors: { [qe]: We.error },
                        })
                    return
                }
            }
            ;(ie = Qe.matches || ie),
                (W = Qe.pendingActionResult),
                (I = Wo(M, j.submission)),
                (ye = !1),
                (ee.active = !1),
                (ae = Bn(n.history, ae.url, ae.signal))
        }
        let {
            shortCircuited: ne,
            matches: de,
            loaderData: je,
            errors: tt,
        } = await $l(
            ae,
            M,
            ie,
            ee.active,
            I,
            j && j.submission,
            j && j.fetcherSubmission,
            j && j.replace,
            j && j.initialHydration === !0,
            ye,
            W,
        )
        ne ||
            ((k = null),
            yt(M, { matches: de || ie, ...bm(W), loaderData: je, errors: tt }))
    }
    async function tn(E, M, j, K, I, ie = {}) {
        Kn()
        let ye = Lp(M, j)
        if ((Re({ navigation: ye }, { flushSync: ie.flushSync === !0 }), I)) {
            let W = await pl(K, M.pathname, E.signal)
            if (W.type === 'aborted') return { shortCircuited: !0 }
            if (W.type === 'error') {
                let ne = Ja(W.partialMatches).route.id
                return {
                    matches: W.partialMatches,
                    pendingActionResult: [
                        ne,
                        { type: 'error', error: W.error },
                    ],
                }
            } else if (W.matches) K = W.matches
            else {
                let {
                    notFoundMatches: ne,
                    error: de,
                    route: je,
                } = Jn(M.pathname)
                return {
                    matches: ne,
                    pendingActionResult: [je.id, { type: 'error', error: de }],
                }
            }
        }
        let ee,
            ae = Ju(K, M)
        if (!ae.route.action && !ae.route.lazy)
            ee = {
                type: 'error',
                error: nl(405, {
                    method: E.method,
                    pathname: M.pathname,
                    routeId: ae.route.id,
                }),
            }
        else if (
            ((ee = (await Ta('action', C, E, [ae], K, null))[ae.route.id]),
            E.signal.aborted)
        )
            return { shortCircuited: !0 }
        if (Fa(ee)) {
            let W
            return (
                ie && ie.replace != null
                    ? (W = ie.replace)
                    : (W =
                          ym(
                              ee.response.headers.get('Location'),
                              new URL(E.url),
                              v,
                          ) ===
                          C.location.pathname + C.location.search),
                await Ol(E, ee, !0, { submission: j, replace: W }),
                { shortCircuited: !0 }
            )
        }
        if (Yt(ee)) {
            let W = Ja(K, ae.route.id)
            return (
                (ie && ie.replace) !== !0 && (he = 'PUSH'),
                { matches: K, pendingActionResult: [W.route.id, ee] }
            )
        }
        return { matches: K, pendingActionResult: [ae.route.id, ee] }
    }
    async function $l(E, M, j, K, I, ie, ye, ee, ae, W, ne) {
        let de = I || Wo(M, ie),
            je = ie || ye || Rm(de),
            tt = !Dt && !ae
        if (K) {
            if (tt) {
                let Ke = ln(ne)
                Re(
                    {
                        navigation: de,
                        ...(Ke !== void 0 ? { actionData: Ke } : {}),
                    },
                    { flushSync: W },
                )
            }
            let Me = await pl(j, M.pathname, E.signal)
            if (Me.type === 'aborted') return { shortCircuited: !0 }
            if (Me.type === 'error') {
                let Ke = Ja(Me.partialMatches).route.id
                return {
                    matches: Me.partialMatches,
                    loaderData: {},
                    errors: { [Ke]: Me.error },
                }
            } else if (Me.matches) j = Me.matches
            else {
                let {
                    error: Ke,
                    notFoundMatches: Ct,
                    route: wa,
                } = Jn(M.pathname)
                return { matches: Ct, loaderData: {}, errors: { [wa.id]: Ke } }
            }
        }
        let Qe = h || f,
            [qe, We] = dm(
                n.history,
                C,
                j,
                je,
                M,
                ae === !0,
                ht,
                it,
                le,
                Z,
                S,
                Qe,
                v,
                ne,
            )
        if (((se = ++ve), qe.length === 0 && We.length === 0)) {
            let Me = Wl()
            return (
                yt(
                    M,
                    {
                        matches: j,
                        loaderData: {},
                        errors:
                            ne && Yt(ne[1]) ? { [ne[0]]: ne[1].error } : null,
                        ...bm(ne),
                        ...(Me ? { fetchers: new Map(C.fetchers) } : {}),
                    },
                    { flushSync: W },
                ),
                { shortCircuited: !0 }
            )
        }
        if (tt) {
            let Me = {}
            if (!K) {
                Me.navigation = de
                let Ke = ln(ne)
                Ke !== void 0 && (Me.actionData = Ke)
            }
            We.length > 0 && (Me.fetchers = an(We)), Re(Me, { flushSync: W })
        }
        We.forEach((Me) => {
            yl(Me.key), Me.controller && J.set(Me.key, Me.controller)
        })
        let Qt = () => We.forEach((Me) => yl(Me.key))
        k && k.signal.addEventListener('abort', Qt)
        let { loaderResults: wl, fetcherResults: vt } = await Nt(
            C,
            j,
            qe,
            We,
            E,
        )
        if (E.signal.aborted) return { shortCircuited: !0 }
        k && k.signal.removeEventListener('abort', Qt),
            We.forEach((Me) => J.delete(Me.key))
        let pt = mr(wl)
        if (pt)
            return (
                await Ol(E, pt.result, !0, { replace: ee }),
                { shortCircuited: !0 }
            )
        if (((pt = mr(vt)), pt))
            return (
                S.add(pt.key),
                await Ol(E, pt.result, !0, { replace: ee }),
                { shortCircuited: !0 }
            )
        let { loaderData: Ml, errors: Zt } = pm(C, j, wl, ne, We, vt)
        ae && C.errors && (Zt = { ...C.errors, ...Zt })
        let Ge = Wl(),
            Oa = Rt(se),
            Da = Ge || Oa || We.length > 0
        return {
            matches: j,
            loaderData: Ml,
            errors: Zt,
            ...(Da ? { fetchers: new Map(C.fetchers) } : {}),
        }
    }
    function ln(E) {
        if (E && !Yt(E[1])) return { [E[0]]: E[1].data }
        if (C.actionData)
            return Object.keys(C.actionData).length === 0 ? null : C.actionData
    }
    function an(E) {
        return (
            E.forEach((M) => {
                let j = C.fetchers.get(M.key),
                    K = Qu(void 0, j ? j.data : void 0)
                C.fetchers.set(M.key, K)
            }),
            new Map(C.fetchers)
        )
    }
    async function Vn(E, M, j, K) {
        yl(E)
        let I = (K && K.flushSync) === !0,
            ie = h || f,
            ye = ls(
                C.location,
                C.matches,
                v,
                j,
                M,
                K == null ? void 0 : K.relative,
            ),
            ee = Sa(ie, ye, v),
            ae = Dl(ee, ie, ye)
        if ((ae.active && ae.matches && (ee = ae.matches), !ee)) {
            Vt(E, M, nl(404, { pathname: ye }), { flushSync: I })
            return
        }
        let { path: W, submission: ne, error: de } = sm(!0, ye, K)
        if (de) {
            Vt(E, M, de, { flushSync: I })
            return
        }
        let je = Ju(ee, W),
            tt = (K && K.preventScrollReset) === !0
        if (ne && fl(ne.formMethod)) {
            await Qn(E, M, W, je, ee, ae.active, I, tt, ne)
            return
        }
        Z.set(E, { routeId: M, path: W }),
            await Zn(E, M, W, je, ee, ae.active, I, tt, ne)
    }
    async function Qn(E, M, j, K, I, ie, ye, ee, ae) {
        Kn(), Z.delete(E)
        function W(ke) {
            if (!ke.route.action && !ke.route.lazy) {
                let Cl = nl(405, {
                    method: ae.formMethod,
                    pathname: j,
                    routeId: M,
                })
                return Vt(E, M, Cl, { flushSync: ye }), !0
            }
            return !1
        }
        if (!ie && W(K)) return
        let ne = C.fetchers.get(E)
        ul(E, Hp(ae, ne), { flushSync: ye })
        let de = new AbortController(),
            je = Bn(n.history, j, de.signal, ae)
        if (ie) {
            let ke = await pl(I, j, je.signal)
            if (ke.type === 'aborted') return
            if (ke.type === 'error') {
                Vt(E, M, ke.error, { flushSync: ye })
                return
            } else if (ke.matches) {
                if (((I = ke.matches), (K = Ju(I, j)), W(K))) return
            } else {
                Vt(E, M, nl(404, { pathname: j }), { flushSync: ye })
                return
            }
        }
        J.set(E, de)
        let tt = ve,
            qe = (await Ta('action', C, je, [K], I, E))[K.route.id]
        if (je.signal.aborted) {
            J.get(E) === de && J.delete(E)
            return
        }
        if (le.has(E)) {
            if (Fa(qe) || Yt(qe)) {
                ul(E, ba(void 0))
                return
            }
        } else {
            if (Fa(qe))
                if ((J.delete(E), se > tt)) {
                    ul(E, ba(void 0))
                    return
                } else
                    return (
                        S.add(E),
                        ul(E, Qu(ae)),
                        Ol(je, qe, !1, {
                            fetcherSubmission: ae,
                            preventScrollReset: ee,
                        })
                    )
            if (Yt(qe)) {
                Vt(E, M, qe.error)
                return
            }
        }
        let We = C.navigation.location || C.location,
            Qt = Bn(n.history, We, de.signal),
            wl = h || f,
            vt =
                C.navigation.state !== 'idle'
                    ? Sa(wl, C.navigation.location, v)
                    : C.matches
        we(vt, "Didn't find any matches after fetcher action")
        let pt = ++ve
        _e.set(E, pt)
        let Ml = Qu(ae, qe.data)
        C.fetchers.set(E, Ml)
        let [Zt, Ge] = dm(
            n.history,
            C,
            vt,
            ae,
            We,
            !1,
            ht,
            it,
            le,
            Z,
            S,
            wl,
            v,
            [K.route.id, qe],
        )
        Ge.filter((ke) => ke.key !== E).forEach((ke) => {
            let Cl = ke.key,
                ri = C.fetchers.get(Cl),
                un = Qu(void 0, ri ? ri.data : void 0)
            C.fetchers.set(Cl, un),
                yl(Cl),
                ke.controller && J.set(Cl, ke.controller)
        }),
            Re({ fetchers: new Map(C.fetchers) })
        let Oa = () => Ge.forEach((ke) => yl(ke.key))
        de.signal.addEventListener('abort', Oa)
        let { loaderResults: Da, fetcherResults: Me } = await Nt(
            C,
            vt,
            Zt,
            Ge,
            Qt,
        )
        if (de.signal.aborted) return
        de.signal.removeEventListener('abort', Oa),
            _e.delete(E),
            J.delete(E),
            Ge.forEach((ke) => J.delete(ke.key))
        let Ke = mr(Da)
        if (Ke) return Ol(Qt, Ke.result, !1, { preventScrollReset: ee })
        if (((Ke = mr(Me)), Ke))
            return (
                S.add(Ke.key), Ol(Qt, Ke.result, !1, { preventScrollReset: ee })
            )
        let { loaderData: Ct, errors: wa } = pm(C, vt, Da, void 0, Ge, Me)
        if (C.fetchers.has(E)) {
            let ke = ba(qe.data)
            C.fetchers.set(E, ke)
        }
        Rt(pt),
            C.navigation.state === 'loading' && pt > se
                ? (we(he, 'Expected pending action'),
                  k && k.abort(),
                  yt(C.navigation.location, {
                      matches: vt,
                      loaderData: Ct,
                      errors: wa,
                      fetchers: new Map(C.fetchers),
                  }))
                : (Re({
                      errors: wa,
                      loaderData: gm(C.loaderData, Ct, vt, wa),
                      fetchers: new Map(C.fetchers),
                  }),
                  (ht = !1))
    }
    async function Zn(E, M, j, K, I, ie, ye, ee, ae) {
        let W = C.fetchers.get(E)
        ul(E, Qu(ae, W ? W.data : void 0), { flushSync: ye })
        let ne = new AbortController(),
            de = Bn(n.history, j, ne.signal)
        if (ie) {
            let qe = await pl(I, j, de.signal)
            if (qe.type === 'aborted') return
            if (qe.type === 'error') {
                Vt(E, M, qe.error, { flushSync: ye })
                return
            } else if (qe.matches) (I = qe.matches), (K = Ju(I, j))
            else {
                Vt(E, M, nl(404, { pathname: j }), { flushSync: ye })
                return
            }
        }
        J.set(E, ne)
        let je = ve,
            Qe = (await Ta('loader', C, de, [K], I, E))[K.route.id]
        if ((J.get(E) === ne && J.delete(E), !de.signal.aborted)) {
            if (le.has(E)) {
                ul(E, ba(void 0))
                return
            }
            if (Fa(Qe))
                if (se > je) {
                    ul(E, ba(void 0))
                    return
                } else {
                    S.add(E), await Ol(de, Qe, !1, { preventScrollReset: ee })
                    return
                }
            if (Yt(Qe)) {
                Vt(E, M, Qe.error)
                return
            }
            ul(E, ba(Qe.data))
        }
    }
    async function Ol(
        E,
        M,
        j,
        {
            submission: K,
            fetcherSubmission: I,
            preventScrollReset: ie,
            replace: ye,
        } = {},
    ) {
        M.response.headers.has('X-Remix-Revalidate') && (ht = !0)
        let ee = M.response.headers.get('Location')
        we(ee, 'Expected a Location header on the redirect Response'),
            (ee = ym(ee, new URL(E.url), v))
        let ae = Fu(C.location, ee, { _isRedirect: !0 })
        if (c) {
            let Qe = !1
            if (M.response.headers.has('X-Remix-Reload-Document')) Qe = !0
            else if (ms.test(ee)) {
                const qe = n.history.createURL(ee)
                Qe =
                    qe.origin !== i.location.origin ||
                    dl(qe.pathname, v) == null
            }
            if (Qe) {
                ye ? i.location.replace(ee) : i.location.assign(ee)
                return
            }
        }
        k = null
        let W =
                ye === !0 || M.response.headers.has('X-Remix-Replace')
                    ? 'REPLACE'
                    : 'PUSH',
            { formMethod: ne, formAction: de, formEncType: je } = C.navigation
        !K && !I && ne && de && je && (K = Rm(C.navigation))
        let tt = K || I
        if (bp.has(M.response.status) && tt && fl(tt.formMethod))
            await Xt(W, ae, {
                submission: { ...tt, formAction: ee },
                preventScrollReset: ie || be,
                enableViewTransition: j ? fe : void 0,
            })
        else {
            let Qe = Wo(ae, K)
            await Xt(W, ae, {
                overrideNavigation: Qe,
                fetcherSubmission: I,
                preventScrollReset: ie || be,
                enableViewTransition: j ? fe : void 0,
            })
        }
    }
    async function Ta(E, M, j, K, I, ie) {
        let ye,
            ee = {}
        try {
            ye = await wp(p, E, M, j, K, I, ie, s, o)
        } catch (ae) {
            return (
                K.forEach((W) => {
                    ee[W.route.id] = { type: 'error', error: ae }
                }),
                ee
            )
        }
        for (let [ae, W] of Object.entries(ye))
            if (Np(W)) {
                let ne = W.result
                ee[ae] = { type: 'redirect', response: _p(ne, j, ae, I, v) }
            } else ee[ae] = await Cp(W)
        return ee
    }
    async function Nt(E, M, j, K, I) {
        let ie = Ta('loader', E, I, j, M, null),
            ye = Promise.all(
                K.map(async (W) => {
                    if (W.matches && W.match && W.controller) {
                        let de = (
                            await Ta(
                                'loader',
                                E,
                                Bn(n.history, W.path, W.controller.signal),
                                [W.match],
                                W.matches,
                                W.key,
                            )
                        )[W.match.route.id]
                        return { [W.key]: de }
                    } else
                        return Promise.resolve({
                            [W.key]: {
                                type: 'error',
                                error: nl(404, { pathname: W.path }),
                            },
                        })
                }),
            ),
            ee = await ie,
            ae = (await ye).reduce((W, ne) => Object.assign(W, ne), {})
        return { loaderResults: ee, fetcherResults: ae }
    }
    function Kn() {
        ;(ht = !0),
            Z.forEach((E, M) => {
                J.has(M) && it.add(M), yl(M)
            })
    }
    function ul(E, M, j = {}) {
        C.fetchers.set(E, M),
            Re(
                { fetchers: new Map(C.fetchers) },
                { flushSync: (j && j.flushSync) === !0 },
            )
    }
    function Vt(E, M, j, K = {}) {
        let I = Ja(C.matches, M)
        kn(E),
            Re(
                { errors: { [I.route.id]: j }, fetchers: new Map(C.fetchers) },
                { flushSync: (K && K.flushSync) === !0 },
            )
    }
    function xa(E) {
        return (
            ce.set(E, (ce.get(E) || 0) + 1),
            le.has(E) && le.delete(E),
            C.fetchers.get(E) || Sp
        )
    }
    function kn(E) {
        let M = C.fetchers.get(E)
        J.has(E) && !(M && M.state === 'loading' && _e.has(E)) && yl(E),
            Z.delete(E),
            _e.delete(E),
            S.delete(E),
            le.delete(E),
            it.delete(E),
            C.fetchers.delete(E)
    }
    function ai(E) {
        let M = (ce.get(E) || 0) - 1
        M <= 0 ? (ce.delete(E), le.add(E)) : ce.set(E, M),
            Re({ fetchers: new Map(C.fetchers) })
    }
    function yl(E) {
        let M = J.get(E)
        M && (M.abort(), J.delete(E))
    }
    function ni(E) {
        for (let M of E) {
            let j = xa(M),
                K = ba(j.data)
            C.fetchers.set(M, K)
        }
    }
    function Wl() {
        let E = [],
            M = !1
        for (let j of S) {
            let K = C.fetchers.get(j)
            we(K, `Expected fetcher: ${j}`),
                K.state === 'loading' && (S.delete(j), E.push(j), (M = !0))
        }
        return ni(E), M
    }
    function Rt(E) {
        let M = []
        for (let [j, K] of _e)
            if (K < E) {
                let I = C.fetchers.get(j)
                we(I, `Expected fetcher: ${j}`),
                    I.state === 'loading' && (yl(j), _e.delete(j), M.push(j))
            }
        return ni(M), M.length > 0
    }
    function Hr(E, M) {
        let j = C.blockers.get(E) || Vu
        return P.get(E) !== M && P.set(E, M), j
    }
    function il(E) {
        C.blockers.delete(E), P.delete(E)
    }
    function ot(E, M) {
        let j = C.blockers.get(E) || Vu
        we(
            (j.state === 'unblocked' && M.state === 'blocked') ||
                (j.state === 'blocked' && M.state === 'blocked') ||
                (j.state === 'blocked' && M.state === 'proceeding') ||
                (j.state === 'blocked' && M.state === 'unblocked') ||
                (j.state === 'proceeding' && M.state === 'unblocked'),
            `Invalid blocker state transition: ${j.state} -> ${M.state}`,
        )
        let K = new Map(C.blockers)
        K.set(E, M), Re({ blockers: K })
    }
    function ui({ currentLocation: E, nextLocation: M, historyAction: j }) {
        if (P.size === 0) return
        P.size > 1 && Et(!1, 'A router only supports one blocker at a time')
        let K = Array.from(P.entries()),
            [I, ie] = K[K.length - 1],
            ye = C.blockers.get(I)
        if (
            !(ye && ye.state === 'proceeding') &&
            ie({ currentLocation: E, nextLocation: M, historyAction: j })
        )
            return I
    }
    function Jn(E) {
        let M = nl(404, { pathname: E }),
            j = h || f,
            { matches: K, route: I } = Sm(j)
        return { notFoundMatches: K, route: I, error: M }
    }
    function Br(E, M, j) {
        if (((D = E), (Y = M), (A = j || null), !z && C.navigation === $o)) {
            z = !0
            let K = vl(C.location, C.matches)
            K != null && Re({ restoreScrollPosition: K })
        }
        return () => {
            ;(D = null), (Y = null), (A = null)
        }
    }
    function Aa(E, M) {
        return (
            (A &&
                A(
                    E,
                    M.map((K) => Wv(K, C.loaderData)),
                )) ||
            E.key
        )
    }
    function nn(E, M) {
        if (D && Y) {
            let j = Aa(E, M)
            D[j] = Y()
        }
    }
    function vl(E, M) {
        if (D) {
            let j = Aa(E, M),
                K = D[j]
            if (typeof K == 'number') return K
        }
        return null
    }
    function Dl(E, M, j) {
        if (m)
            if (E) {
                if (Object.keys(E[0].params).length > 0)
                    return { active: !0, matches: vr(M, j, v, !0) }
            } else return { active: !0, matches: vr(M, j, v, !0) || [] }
        return { active: !1, matches: null }
    }
    async function pl(E, M, j) {
        if (!m) return { type: 'success', matches: E }
        let K = E
        for (;;) {
            let I = h == null,
                ie = h || f,
                ye = s
            try {
                await m({
                    signal: j,
                    path: M,
                    matches: K,
                    patch: (W, ne) => {
                        j.aborted || mm(W, ne, ie, ye, o)
                    },
                })
            } catch (W) {
                return { type: 'error', error: W, partialMatches: K }
            } finally {
                I && !j.aborted && (f = [...f])
            }
            if (j.aborted) return { type: 'aborted' }
            let ee = Sa(ie, M, v)
            if (ee) return { type: 'success', matches: ee }
            let ae = vr(ie, M, v, !0)
            if (
                !ae ||
                (K.length === ae.length &&
                    K.every((W, ne) => W.route.id === ae[ne].route.id))
            )
                return { type: 'success', matches: null }
            K = ae
        }
    }
    function qr(E) {
        ;(s = {}), (h = Rr(E, o, void 0, s))
    }
    function ii(E, M) {
        let j = h == null
        mm(E, M, h || f, s, o), j && ((f = [...f]), Re({}))
    }
    return (
        (F = {
            get basename() {
                return v
            },
            get future() {
                return g
            },
            get state() {
                return C
            },
            get routes() {
                return f
            },
            get window() {
                return i
            },
            initialize: mt,
            subscribe: $e,
            enableScrollRestoration: Br,
            navigate: Fl,
            fetch: Vn,
            revalidate: ml,
            createHref: (E) => n.history.createHref(E),
            encodeLocation: (E) => n.history.encodeLocation(E),
            getFetcher: xa,
            deleteFetcher: ai,
            dispose: Ue,
            getBlocker: Hr,
            deleteBlocker: il,
            patchRoutes: ii,
            _internalFetchControllers: J,
            _internalSetRoutes: qr,
        }),
        F
    )
}
function Tp(n) {
    return (
        n != null &&
        (('formData' in n && n.formData != null) ||
            ('body' in n && n.body !== void 0))
    )
}
function ls(n, i, c, o, s, f) {
    let h, v
    if (s) {
        h = []
        for (let m of i)
            if ((h.push(m), m.route.id === s)) {
                v = m
                break
            }
    } else (h = i), (v = i[i.length - 1])
    let p = hs(o || '.', ds(h), dl(n.pathname, c) || n.pathname, f === 'path')
    if (
        (o == null && ((p.search = n.search), (p.hash = n.hash)),
        (o == null || o === '' || o === '.') && v)
    ) {
        let m = ys(p.search)
        if (v.route.index && !m)
            p.search = p.search ? p.search.replace(/^\?/, '?index&') : '?index'
        else if (!v.route.index && m) {
            let g = new URLSearchParams(p.search),
                x = g.getAll('index')
            g.delete('index'),
                x.filter((D) => D).forEach((D) => g.append('index', D))
            let O = g.toString()
            p.search = O ? `?${O}` : ''
        }
    }
    return (
        c !== '/' &&
            (p.pathname = p.pathname === '/' ? c : xl([c, p.pathname])),
        Ea(p)
    )
}
function sm(n, i, c) {
    if (!c || !Tp(c)) return { path: i }
    if (c.formMethod && !jp(c.formMethod))
        return { path: i, error: nl(405, { method: c.formMethod }) }
    let o = () => ({ path: i, error: nl(400, { type: 'invalid-body' }) }),
        f = (c.formMethod || 'get').toUpperCase(),
        h = Jm(i)
    if (c.body !== void 0) {
        if (c.formEncType === 'text/plain') {
            if (!fl(f)) return o()
            let x =
                typeof c.body == 'string'
                    ? c.body
                    : c.body instanceof FormData ||
                        c.body instanceof URLSearchParams
                      ? Array.from(c.body.entries()).reduce(
                            (O, [D, A]) => `${O}${D}=${A}
`,
                            '',
                        )
                      : String(c.body)
            return {
                path: i,
                submission: {
                    formMethod: f,
                    formAction: h,
                    formEncType: c.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: x,
                },
            }
        } else if (c.formEncType === 'application/json') {
            if (!fl(f)) return o()
            try {
                let x = typeof c.body == 'string' ? JSON.parse(c.body) : c.body
                return {
                    path: i,
                    submission: {
                        formMethod: f,
                        formAction: h,
                        formEncType: c.formEncType,
                        formData: void 0,
                        json: x,
                        text: void 0,
                    },
                }
            } catch {
                return o()
            }
        }
    }
    we(
        typeof FormData == 'function',
        'FormData is not available in this environment',
    )
    let v, p
    if (c.formData) (v = ns(c.formData)), (p = c.formData)
    else if (c.body instanceof FormData) (v = ns(c.body)), (p = c.body)
    else if (c.body instanceof URLSearchParams) (v = c.body), (p = vm(v))
    else if (c.body == null) (v = new URLSearchParams()), (p = new FormData())
    else
        try {
            ;(v = new URLSearchParams(c.body)), (p = vm(v))
        } catch {
            return o()
        }
    let m = {
        formMethod: f,
        formAction: h,
        formEncType:
            (c && c.formEncType) || 'application/x-www-form-urlencoded',
        formData: p,
        json: void 0,
        text: void 0,
    }
    if (fl(m.formMethod)) return { path: i, submission: m }
    let g = Ra(i)
    return (
        n && g.search && ys(g.search) && v.append('index', ''),
        (g.search = `?${v}`),
        { path: Ea(g), submission: m }
    )
}
function fm(n, i, c = !1) {
    let o = n.findIndex((s) => s.route.id === i)
    return o >= 0 ? n.slice(0, c ? o + 1 : o) : n
}
function dm(n, i, c, o, s, f, h, v, p, m, g, x, O, D) {
    let A = D ? (Yt(D[1]) ? D[1].error : D[1].data) : void 0,
        Y = n.createURL(i.location),
        z = n.createURL(s),
        q = c
    f && i.errors
        ? (q = fm(c, Object.keys(i.errors)[0], !0))
        : D && Yt(D[1]) && (q = fm(c, D[0]))
    let V = D ? D[1].statusCode : void 0,
        $ = V && V >= 400,
        oe = q.filter((C, he) => {
            let { route: be } = C
            if (be.lazy) return !0
            if (be.loader == null) return !1
            if (f) return as(be, i.loaderData, i.errors)
            if (xp(i.loaderData, i.matches[he], C)) return !0
            let k = i.matches[he],
                fe = C
            return hm(C, {
                currentUrl: Y,
                currentParams: k.params,
                nextUrl: z,
                nextParams: fe.params,
                ...o,
                actionResult: A,
                actionStatus: V,
                defaultShouldRevalidate: $
                    ? !1
                    : h ||
                      Y.pathname + Y.search === z.pathname + z.search ||
                      Y.search !== z.search ||
                      Ap(k, fe),
            })
        }),
        F = []
    return (
        m.forEach((C, he) => {
            if (f || !c.some((Ot) => Ot.route.id === C.routeId) || p.has(he))
                return
            let be = Sa(x, C.path, O)
            if (!be) {
                F.push({
                    key: he,
                    routeId: C.routeId,
                    path: C.path,
                    matches: null,
                    match: null,
                    controller: null,
                })
                return
            }
            let k = i.fetchers.get(he),
                fe = Ju(be, C.path),
                Le = !1
            g.has(he)
                ? (Le = !1)
                : v.has(he)
                  ? (v.delete(he), (Le = !0))
                  : k && k.state !== 'idle' && k.data === void 0
                    ? (Le = h)
                    : (Le = hm(fe, {
                          currentUrl: Y,
                          currentParams: i.matches[i.matches.length - 1].params,
                          nextUrl: z,
                          nextParams: c[c.length - 1].params,
                          ...o,
                          actionResult: A,
                          actionStatus: V,
                          defaultShouldRevalidate: $ ? !1 : h,
                      })),
                Le &&
                    F.push({
                        key: he,
                        routeId: C.routeId,
                        path: C.path,
                        matches: be,
                        match: fe,
                        controller: new AbortController(),
                    })
        }),
        [oe, F]
    )
}
function as(n, i, c) {
    if (n.lazy) return !0
    if (!n.loader) return !1
    let o = i != null && i[n.id] !== void 0,
        s = c != null && c[n.id] !== void 0
    return !o && s
        ? !1
        : typeof n.loader == 'function' && n.loader.hydrate === !0
          ? !0
          : !o && !s
}
function xp(n, i, c) {
    let o = !i || c.route.id !== i.route.id,
        s = !n.hasOwnProperty(c.route.id)
    return o || s
}
function Ap(n, i) {
    let c = n.route.path
    return (
        n.pathname !== i.pathname ||
        (c != null && c.endsWith('*') && n.params['*'] !== i.params['*'])
    )
}
function hm(n, i) {
    if (n.route.shouldRevalidate) {
        let c = n.route.shouldRevalidate(i)
        if (typeof c == 'boolean') return c
    }
    return i.defaultShouldRevalidate
}
function mm(n, i, c, o, s) {
    let f
    if (n) {
        let p = o[n]
        we(p, `No route found to patch children into: routeId = ${n}`),
            p.children || (p.children = []),
            (f = p.children)
    } else f = c
    let h = i.filter((p) => !f.some((m) => km(p, m))),
        v = Rr(
            h,
            s,
            [n || '_', 'patch', String((f == null ? void 0 : f.length) || '0')],
            o,
        )
    f.push(...v)
}
function km(n, i) {
    return 'id' in n && 'id' in i && n.id === i.id
        ? !0
        : n.index === i.index &&
            n.path === i.path &&
            n.caseSensitive === i.caseSensitive
          ? (!n.children || n.children.length === 0) &&
            (!i.children || i.children.length === 0)
              ? !0
              : n.children.every((c, o) => {
                    var s
                    return (s = i.children) == null
                        ? void 0
                        : s.some((f) => km(c, f))
                })
          : !1
}
async function Op(n, i, c) {
    if (!n.lazy) return
    let o = await n.lazy()
    if (!n.lazy) return
    let s = c[n.id]
    we(s, 'No route found in manifest')
    let f = {}
    for (let h in o) {
        let p = s[h] !== void 0 && h !== 'hasErrorBoundary'
        Et(
            !p,
            `Route "${s.id}" has a static property "${h}" defined but its lazy function is also returning a value for this property. The lazy route property "${h}" will be ignored.`,
        ),
            !p && !Fv.has(h) && (f[h] = o[h])
    }
    Object.assign(s, f), Object.assign(s, { ...i(s), lazy: void 0 })
}
async function Dp({ matches: n }) {
    let i = n.filter((o) => o.shouldLoad)
    return (await Promise.all(i.map((o) => o.resolve()))).reduce(
        (o, s, f) => Object.assign(o, { [i[f].route.id]: s }),
        {},
    )
}
async function wp(n, i, c, o, s, f, h, v, p, m) {
    let g = f.map((D) => (D.route.lazy ? Op(D.route, p, v) : void 0)),
        x = f.map((D, A) => {
            let Y = g[A],
                z = s.some((V) => V.route.id === D.route.id)
            return {
                ...D,
                shouldLoad: z,
                resolve: async (V) => (
                    V &&
                        o.method === 'GET' &&
                        (D.route.lazy || D.route.loader) &&
                        (z = !0),
                    z
                        ? Mp(i, o, D, Y, V, m)
                        : Promise.resolve({ type: 'data', result: void 0 })
                ),
            }
        }),
        O = await n({
            matches: x,
            request: o,
            params: f[0].params,
            fetcherKey: h,
            context: m,
        })
    try {
        await Promise.all(g)
    } catch {}
    return O
}
async function Mp(n, i, c, o, s, f) {
    let h,
        v,
        p = (m) => {
            let g,
                x = new Promise((A, Y) => (g = Y))
            ;(v = () => g()), i.signal.addEventListener('abort', v)
            let O = (A) =>
                    typeof m != 'function'
                        ? Promise.reject(
                              new Error(
                                  `You cannot call the handler for a route which defines a boolean "${n}" [routeId: ${c.route.id}]`,
                              ),
                          )
                        : m(
                              { request: i, params: c.params, context: f },
                              ...(A !== void 0 ? [A] : []),
                          ),
                D = (async () => {
                    try {
                        return {
                            type: 'data',
                            result: await (s ? s((Y) => O(Y)) : O()),
                        }
                    } catch (A) {
                        return { type: 'error', result: A }
                    }
                })()
            return Promise.race([D, x])
        }
    try {
        let m = c.route[n]
        if (o)
            if (m) {
                let g,
                    [x] = await Promise.all([
                        p(m).catch((O) => {
                            g = O
                        }),
                        o,
                    ])
                if (g !== void 0) throw g
                h = x
            } else if ((await o, (m = c.route[n]), m)) h = await p(m)
            else if (n === 'action') {
                let g = new URL(i.url),
                    x = g.pathname + g.search
                throw nl(405, {
                    method: i.method,
                    pathname: x,
                    routeId: c.route.id,
                })
            } else return { type: 'data', result: void 0 }
        else if (m) h = await p(m)
        else {
            let g = new URL(i.url),
                x = g.pathname + g.search
            throw nl(404, { pathname: x })
        }
    } catch (m) {
        return { type: 'error', result: m }
    } finally {
        v && i.signal.removeEventListener('abort', v)
    }
    return h
}
async function Cp(n) {
    var o, s, f, h, v, p
    let { result: i, type: c } = n
    if (Fm(i)) {
        let m
        try {
            let g = i.headers.get('Content-Type')
            g && /\bapplication\/json\b/.test(g)
                ? i.body == null
                    ? (m = null)
                    : (m = await i.json())
                : (m = await i.text())
        } catch (g) {
            return { type: 'error', error: g }
        }
        return c === 'error'
            ? {
                  type: 'error',
                  error: new xr(i.status, i.statusText, m),
                  statusCode: i.status,
                  headers: i.headers,
              }
            : {
                  type: 'data',
                  data: m,
                  statusCode: i.status,
                  headers: i.headers,
              }
    }
    return c === 'error'
        ? Em(i)
            ? i.data instanceof Error
                ? {
                      type: 'error',
                      error: i.data,
                      statusCode: (o = i.init) == null ? void 0 : o.status,
                      headers:
                          (s = i.init) != null && s.headers
                              ? new Headers(i.init.headers)
                              : void 0,
                  }
                : {
                      type: 'error',
                      error: new xr(
                          ((f = i.init) == null ? void 0 : f.status) || 500,
                          void 0,
                          i.data,
                      ),
                      statusCode: $u(i) ? i.status : void 0,
                      headers:
                          (h = i.init) != null && h.headers
                              ? new Headers(i.init.headers)
                              : void 0,
                  }
            : { type: 'error', error: i, statusCode: $u(i) ? i.status : void 0 }
        : Em(i)
          ? {
                type: 'data',
                data: i.data,
                statusCode: (v = i.init) == null ? void 0 : v.status,
                headers:
                    (p = i.init) != null && p.headers
                        ? new Headers(i.init.headers)
                        : void 0,
            }
          : { type: 'data', data: i }
}
function _p(n, i, c, o, s) {
    let f = n.headers.get('Location')
    if (
        (we(
            f,
            'Redirects returned/thrown from loaders/actions must have a Location header',
        ),
        !ms.test(f))
    ) {
        let h = o.slice(0, o.findIndex((v) => v.route.id === c) + 1)
        ;(f = ls(new URL(i.url), h, s, f)), n.headers.set('Location', f)
    }
    return n
}
function ym(n, i, c) {
    if (ms.test(n)) {
        let o = n,
            s = o.startsWith('//') ? new URL(i.protocol + o) : new URL(o),
            f = dl(s.pathname, c) != null
        if (s.origin === i.origin && f) return s.pathname + s.search + s.hash
    }
    return n
}
function Bn(n, i, c, o) {
    let s = n.createURL(Jm(i)).toString(),
        f = { signal: c }
    if (o && fl(o.formMethod)) {
        let { formMethod: h, formEncType: v } = o
        ;(f.method = h.toUpperCase()),
            v === 'application/json'
                ? ((f.headers = new Headers({ 'Content-Type': v })),
                  (f.body = JSON.stringify(o.json)))
                : v === 'text/plain'
                  ? (f.body = o.text)
                  : v === 'application/x-www-form-urlencoded' && o.formData
                    ? (f.body = ns(o.formData))
                    : (f.body = o.formData)
    }
    return new Request(s, f)
}
function ns(n) {
    let i = new URLSearchParams()
    for (let [c, o] of n.entries())
        i.append(c, typeof o == 'string' ? o : o.name)
    return i
}
function vm(n) {
    let i = new FormData()
    for (let [c, o] of n.entries()) i.append(c, o)
    return i
}
function Up(n, i, c, o = !1, s = !1) {
    let f = {},
        h = null,
        v,
        p = !1,
        m = {},
        g = c && Yt(c[1]) ? c[1].error : void 0
    return (
        n.forEach((x) => {
            if (!(x.route.id in i)) return
            let O = x.route.id,
                D = i[O]
            if (
                (we(
                    !Fa(D),
                    'Cannot handle redirect results in processLoaderData',
                ),
                Yt(D))
            ) {
                let A = D.error
                if ((g !== void 0 && ((A = g), (g = void 0)), (h = h || {}), s))
                    h[O] = A
                else {
                    let Y = Ja(n, O)
                    h[Y.route.id] == null && (h[Y.route.id] = A)
                }
                o || (f[O] = Km),
                    p || ((p = !0), (v = $u(D.error) ? D.error.status : 500)),
                    D.headers && (m[O] = D.headers)
            } else
                (f[O] = D.data),
                    D.statusCode &&
                        D.statusCode !== 200 &&
                        !p &&
                        (v = D.statusCode),
                    D.headers && (m[O] = D.headers)
        }),
        g !== void 0 && c && ((h = { [c[0]]: g }), (f[c[0]] = void 0)),
        { loaderData: f, errors: h, statusCode: v || 200, loaderHeaders: m }
    )
}
function pm(n, i, c, o, s, f) {
    let { loaderData: h, errors: v } = Up(i, c, o)
    return (
        s.forEach((p) => {
            let { key: m, match: g, controller: x } = p,
                O = f[m]
            if (
                (we(O, 'Did not find corresponding fetcher result'),
                !(x && x.signal.aborted))
            )
                if (Yt(O)) {
                    let D = Ja(n.matches, g == null ? void 0 : g.route.id)
                    ;(v && v[D.route.id]) ||
                        (v = { ...v, [D.route.id]: O.error }),
                        n.fetchers.delete(m)
                } else if (Fa(O))
                    we(!1, 'Unhandled fetcher revalidation redirect')
                else {
                    let D = ba(O.data)
                    n.fetchers.set(m, D)
                }
        }),
        { loaderData: h, errors: v }
    )
}
function gm(n, i, c, o) {
    let s = Object.entries(i)
        .filter(([, f]) => f !== Km)
        .reduce((f, [h, v]) => ((f[h] = v), f), {})
    for (let f of c) {
        let h = f.route.id
        if (
            (!i.hasOwnProperty(h) &&
                n.hasOwnProperty(h) &&
                f.route.loader &&
                (s[h] = n[h]),
            o && o.hasOwnProperty(h))
        )
            break
    }
    return s
}
function bm(n) {
    return n
        ? Yt(n[1])
            ? { actionData: {} }
            : { actionData: { [n[0]]: n[1].data } }
        : {}
}
function Ja(n, i) {
    return (
        (i ? n.slice(0, n.findIndex((o) => o.route.id === i) + 1) : [...n])
            .reverse()
            .find((o) => o.route.hasErrorBoundary === !0) || n[0]
    )
}
function Sm(n) {
    let i =
        n.length === 1
            ? n[0]
            : n.find((c) => c.index || !c.path || c.path === '/') || {
                  id: '__shim-error-route__',
              }
    return {
        matches: [{ params: {}, pathname: '', pathnameBase: '', route: i }],
        route: i,
    }
}
function nl(
    n,
    { pathname: i, routeId: c, method: o, type: s, message: f } = {},
) {
    let h = 'Unknown Server Error',
        v = 'Unknown @remix-run/router error'
    return (
        n === 400
            ? ((h = 'Bad Request'),
              o && i && c
                  ? (v = `You made a ${o} request to "${i}" but did not provide a \`loader\` for route "${c}", so there is no way to handle the request.`)
                  : s === 'invalid-body' &&
                    (v = 'Unable to encode submission body'))
            : n === 403
              ? ((h = 'Forbidden'),
                (v = `Route "${c}" does not match URL "${i}"`))
              : n === 404
                ? ((h = 'Not Found'), (v = `No route matches URL "${i}"`))
                : n === 405 &&
                  ((h = 'Method Not Allowed'),
                  o && i && c
                      ? (v = `You made a ${o.toUpperCase()} request to "${i}" but did not provide an \`action\` for route "${c}", so there is no way to handle the request.`)
                      : o &&
                        (v = `Invalid request method "${o.toUpperCase()}"`)),
        new xr(n || 500, h, new Error(v), !0)
    )
}
function mr(n) {
    let i = Object.entries(n)
    for (let c = i.length - 1; c >= 0; c--) {
        let [o, s] = i[c]
        if (Fa(s)) return { key: o, result: s }
    }
}
function Jm(n) {
    let i = typeof n == 'string' ? Ra(n) : n
    return Ea({ ...i, hash: '' })
}
function zp(n, i) {
    return n.pathname !== i.pathname || n.search !== i.search
        ? !1
        : n.hash === ''
          ? i.hash !== ''
          : n.hash === i.hash
            ? !0
            : i.hash !== ''
}
function Np(n) {
    return Fm(n.result) && gp.has(n.result.status)
}
function Yt(n) {
    return n.type === 'error'
}
function Fa(n) {
    return (n && n.type) === 'redirect'
}
function Em(n) {
    return (
        typeof n == 'object' &&
        n != null &&
        'type' in n &&
        'data' in n &&
        'init' in n &&
        n.type === 'DataWithResponseInit'
    )
}
function Fm(n) {
    return (
        n != null &&
        typeof n.status == 'number' &&
        typeof n.statusText == 'string' &&
        typeof n.headers == 'object' &&
        typeof n.body < 'u'
    )
}
function jp(n) {
    return pp.has(n.toUpperCase())
}
function fl(n) {
    return yp.has(n.toUpperCase())
}
function ys(n) {
    return new URLSearchParams(n).getAll('index').some((i) => i === '')
}
function Ju(n, i) {
    let c = typeof i == 'string' ? Ra(i).search : i.search
    if (n[n.length - 1].route.index && ys(c || '')) return n[n.length - 1]
    let o = Vm(n)
    return o[o.length - 1]
}
function Rm(n) {
    let {
        formMethod: i,
        formAction: c,
        formEncType: o,
        text: s,
        formData: f,
        json: h,
    } = n
    if (!(!i || !c || !o)) {
        if (s != null)
            return {
                formMethod: i,
                formAction: c,
                formEncType: o,
                formData: void 0,
                json: void 0,
                text: s,
            }
        if (f != null)
            return {
                formMethod: i,
                formAction: c,
                formEncType: o,
                formData: f,
                json: void 0,
                text: void 0,
            }
        if (h !== void 0)
            return {
                formMethod: i,
                formAction: c,
                formEncType: o,
                formData: void 0,
                json: h,
                text: void 0,
            }
    }
}
function Wo(n, i) {
    return i
        ? {
              state: 'loading',
              location: n,
              formMethod: i.formMethod,
              formAction: i.formAction,
              formEncType: i.formEncType,
              formData: i.formData,
              json: i.json,
              text: i.text,
          }
        : {
              state: 'loading',
              location: n,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
          }
}
function Lp(n, i) {
    return {
        state: 'submitting',
        location: n,
        formMethod: i.formMethod,
        formAction: i.formAction,
        formEncType: i.formEncType,
        formData: i.formData,
        json: i.json,
        text: i.text,
    }
}
function Qu(n, i) {
    return n
        ? {
              state: 'loading',
              formMethod: n.formMethod,
              formAction: n.formAction,
              formEncType: n.formEncType,
              formData: n.formData,
              json: n.json,
              text: n.text,
              data: i,
          }
        : {
              state: 'loading',
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
              data: i,
          }
}
function Hp(n, i) {
    return {
        state: 'submitting',
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
        data: i ? i.data : void 0,
    }
}
function ba(n) {
    return {
        state: 'idle',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: n,
    }
}
function Bp(n, i) {
    try {
        let c = n.sessionStorage.getItem(Zm)
        if (c) {
            let o = JSON.parse(c)
            for (let [s, f] of Object.entries(o || {}))
                f && Array.isArray(f) && i.set(s, new Set(f || []))
        }
    } catch {}
}
function qp(n, i) {
    if (i.size > 0) {
        let c = {}
        for (let [o, s] of i) c[o] = [...s]
        try {
            n.sessionStorage.setItem(Zm, JSON.stringify(c))
        } catch (o) {
            Et(
                !1,
                `Failed to save applied view transitions in sessionStorage (${o}).`,
            )
        }
    }
}
function Yp() {
    let n,
        i,
        c = new Promise((o, s) => {
            ;(n = async (f) => {
                o(f)
                try {
                    await c
                } catch {}
            }),
                (i = async (f) => {
                    s(f)
                    try {
                        await c
                    } catch {}
                })
        })
    return { promise: c, resolve: n, reject: i }
}
var Ia = _.createContext(null)
Ia.displayName = 'DataRouter'
var Pu = _.createContext(null)
Pu.displayName = 'DataRouterState'
var vs = _.createContext({ isTransitioning: !1 })
vs.displayName = 'ViewTransition'
var $m = _.createContext(new Map())
$m.displayName = 'Fetchers'
var Gp = _.createContext(null)
Gp.displayName = 'Await'
var Al = _.createContext(null)
Al.displayName = 'Navigation'
var Dr = _.createContext(null)
Dr.displayName = 'Location'
var kl = _.createContext({ outlet: null, matches: [], isDataRoute: !1 })
kl.displayName = 'Route'
var ps = _.createContext(null)
ps.displayName = 'RouteError'
function Xp(n, { relative: i } = {}) {
    we(
        Iu(),
        'useHref() may be used only in the context of a <Router> component.',
    )
    let { basename: c, navigator: o } = _.useContext(Al),
        { hash: s, pathname: f, search: h } = ei(n, { relative: i }),
        v = f
    return (
        c !== '/' && (v = f === '/' ? c : xl([c, f])),
        o.createHref({ pathname: v, search: h, hash: s })
    )
}
function Iu() {
    return _.useContext(Dr) != null
}
function en() {
    return (
        we(
            Iu(),
            'useLocation() may be used only in the context of a <Router> component.',
        ),
        _.useContext(Dr).location
    )
}
var Wm =
    'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function Pm(n) {
    _.useContext(Al).static || _.useLayoutEffect(n)
}
function Vp() {
    let { isDataRoute: n } = _.useContext(kl)
    return n ? lg() : Qp()
}
function Qp() {
    we(
        Iu(),
        'useNavigate() may be used only in the context of a <Router> component.',
    )
    let n = _.useContext(Ia),
        { basename: i, navigator: c } = _.useContext(Al),
        { matches: o } = _.useContext(kl),
        { pathname: s } = en(),
        f = JSON.stringify(ds(o)),
        h = _.useRef(!1)
    return (
        Pm(() => {
            h.current = !0
        }),
        _.useCallback(
            (p, m = {}) => {
                if ((Et(h.current, Wm), !h.current)) return
                if (typeof p == 'number') {
                    c.go(p)
                    return
                }
                let g = hs(p, JSON.parse(f), s, m.relative === 'path')
                n == null &&
                    i !== '/' &&
                    (g.pathname = g.pathname === '/' ? i : xl([i, g.pathname])),
                    (m.replace ? c.replace : c.push)(g, m.state, m)
            },
            [i, c, f, s, n],
        )
    )
}
_.createContext(null)
function ei(n, { relative: i } = {}) {
    let { matches: c } = _.useContext(kl),
        { pathname: o } = en(),
        s = JSON.stringify(ds(c))
    return _.useMemo(() => hs(n, JSON.parse(s), o, i === 'path'), [n, s, o, i])
}
function Zp(n, i, c, o) {
    we(
        Iu(),
        'useRoutes() may be used only in the context of a <Router> component.',
    )
    let { navigator: s, static: f } = _.useContext(Al),
        { matches: h } = _.useContext(kl),
        v = h[h.length - 1],
        p = v ? v.params : {},
        m = v ? v.pathname : '/',
        g = v ? v.pathnameBase : '/',
        x = v && v.route
    {
        let V = (x && x.path) || ''
        Im(
            m,
            !x || V.endsWith('*') || V.endsWith('*?'),
            `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === '/' ? '*' : `${V}/*`}">.`,
        )
    }
    let O = en(),
        D
    D = O
    let A = D.pathname || '/',
        Y = A
    if (g !== '/') {
        let V = g.replace(/^\//, '').split('/')
        Y = '/' + A.replace(/^\//, '').split('/').slice(V.length).join('/')
    }
    let z =
        !f && c && c.matches && c.matches.length > 0
            ? c.matches
            : Sa(n, { pathname: Y })
    return (
        Et(
            x || z != null,
            `No routes matched location "${D.pathname}${D.search}${D.hash}" `,
        ),
        Et(
            z == null ||
                z[z.length - 1].route.element !== void 0 ||
                z[z.length - 1].route.Component !== void 0 ||
                z[z.length - 1].route.lazy !== void 0,
            `Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
        ),
        $p(
            z &&
                z.map((V) =>
                    Object.assign({}, V, {
                        params: Object.assign({}, p, V.params),
                        pathname: xl([
                            g,
                            s.encodeLocation
                                ? s.encodeLocation(V.pathname).pathname
                                : V.pathname,
                        ]),
                        pathnameBase:
                            V.pathnameBase === '/'
                                ? g
                                : xl([
                                      g,
                                      s.encodeLocation
                                          ? s.encodeLocation(V.pathnameBase)
                                                .pathname
                                          : V.pathnameBase,
                                  ]),
                    }),
                ),
            h,
            c,
            o,
        )
    )
}
function Kp() {
    let n = tg(),
        i = $u(n)
            ? `${n.status} ${n.statusText}`
            : n instanceof Error
              ? n.message
              : JSON.stringify(n),
        c = n instanceof Error ? n.stack : null,
        o = 'rgba(200,200,200, 0.5)',
        s = { padding: '0.5rem', backgroundColor: o },
        f = { padding: '2px 4px', backgroundColor: o },
        h = null
    return (
        console.error(
            'Error handled by React Router default ErrorBoundary:',
            n,
        ),
        (h = _.createElement(
            _.Fragment,
            null,
            _.createElement('p', null, '💿 Hey developer 👋'),
            _.createElement(
                'p',
                null,
                'You can provide a way better UX than this when your app throws errors by providing your own ',
                _.createElement('code', { style: f }, 'ErrorBoundary'),
                ' or',
                ' ',
                _.createElement('code', { style: f }, 'errorElement'),
                ' prop on your route.',
            ),
        )),
        _.createElement(
            _.Fragment,
            null,
            _.createElement('h2', null, 'Unexpected Application Error!'),
            _.createElement('h3', { style: { fontStyle: 'italic' } }, i),
            c ? _.createElement('pre', { style: s }, c) : null,
            h,
        )
    )
}
var kp = _.createElement(Kp, null),
    Jp = class extends _.Component {
        constructor(n) {
            super(n),
                (this.state = {
                    location: n.location,
                    revalidation: n.revalidation,
                    error: n.error,
                })
        }
        static getDerivedStateFromError(n) {
            return { error: n }
        }
        static getDerivedStateFromProps(n, i) {
            return i.location !== n.location ||
                (i.revalidation !== 'idle' && n.revalidation === 'idle')
                ? {
                      error: n.error,
                      location: n.location,
                      revalidation: n.revalidation,
                  }
                : {
                      error: n.error !== void 0 ? n.error : i.error,
                      location: i.location,
                      revalidation: n.revalidation || i.revalidation,
                  }
        }
        componentDidCatch(n, i) {
            console.error(
                'React Router caught the following error during render',
                n,
                i,
            )
        }
        render() {
            return this.state.error !== void 0
                ? _.createElement(
                      kl.Provider,
                      { value: this.props.routeContext },
                      _.createElement(ps.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                      }),
                  )
                : this.props.children
        }
    }
function Fp({ routeContext: n, match: i, children: c }) {
    let o = _.useContext(Ia)
    return (
        o &&
            o.static &&
            o.staticContext &&
            (i.route.errorElement || i.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = i.route.id),
        _.createElement(kl.Provider, { value: n }, c)
    )
}
function $p(n, i = [], c = null, o = null) {
    if (n == null) {
        if (!c) return null
        if (c.errors) n = c.matches
        else if (i.length === 0 && !c.initialized && c.matches.length > 0)
            n = c.matches
        else return null
    }
    let s = n,
        f = c == null ? void 0 : c.errors
    if (f != null) {
        let p = s.findIndex(
            (m) =>
                m.route.id && (f == null ? void 0 : f[m.route.id]) !== void 0,
        )
        we(
            p >= 0,
            `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(',')}`,
        ),
            (s = s.slice(0, Math.min(s.length, p + 1)))
    }
    let h = !1,
        v = -1
    if (c)
        for (let p = 0; p < s.length; p++) {
            let m = s[p]
            if (
                ((m.route.HydrateFallback || m.route.hydrateFallbackElement) &&
                    (v = p),
                m.route.id)
            ) {
                let { loaderData: g, errors: x } = c,
                    O =
                        m.route.loader &&
                        !g.hasOwnProperty(m.route.id) &&
                        (!x || x[m.route.id] === void 0)
                if (m.route.lazy || O) {
                    ;(h = !0), v >= 0 ? (s = s.slice(0, v + 1)) : (s = [s[0]])
                    break
                }
            }
        }
    return s.reduceRight((p, m, g) => {
        let x,
            O = !1,
            D = null,
            A = null
        c &&
            ((x = f && m.route.id ? f[m.route.id] : void 0),
            (D = m.route.errorElement || kp),
            h &&
                (v < 0 && g === 0
                    ? (Im(
                          'route-fallback',
                          !1,
                          'No `HydrateFallback` element provided to render during initial hydration',
                      ),
                      (O = !0),
                      (A = null))
                    : v === g &&
                      ((O = !0), (A = m.route.hydrateFallbackElement || null))))
        let Y = i.concat(s.slice(0, g + 1)),
            z = () => {
                let q
                return (
                    x
                        ? (q = D)
                        : O
                          ? (q = A)
                          : m.route.Component
                            ? (q = _.createElement(m.route.Component, null))
                            : m.route.element
                              ? (q = m.route.element)
                              : (q = p),
                    _.createElement(Fp, {
                        match: m,
                        routeContext: {
                            outlet: p,
                            matches: Y,
                            isDataRoute: c != null,
                        },
                        children: q,
                    })
                )
            }
        return c && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
            ? _.createElement(Jp, {
                  location: c.location,
                  revalidation: c.revalidation,
                  component: D,
                  error: x,
                  children: z(),
                  routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
              })
            : z()
    }, null)
}
function gs(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Wp(n) {
    let i = _.useContext(Ia)
    return we(i, gs(n)), i
}
function Pp(n) {
    let i = _.useContext(Pu)
    return we(i, gs(n)), i
}
function Ip(n) {
    let i = _.useContext(kl)
    return we(i, gs(n)), i
}
function bs(n) {
    let i = Ip(n),
        c = i.matches[i.matches.length - 1]
    return (
        we(
            c.route.id,
            `${n} can only be used on routes that contain a unique "id"`,
        ),
        c.route.id
    )
}
function eg() {
    return bs('useRouteId')
}
function tg() {
    var o
    let n = _.useContext(ps),
        i = Pp('useRouteError'),
        c = bs('useRouteError')
    return n !== void 0 ? n : (o = i.errors) == null ? void 0 : o[c]
}
function lg() {
    let { router: n } = Wp('useNavigate'),
        i = bs('useNavigate'),
        c = _.useRef(!1)
    return (
        Pm(() => {
            c.current = !0
        }),
        _.useCallback(
            async (s, f = {}) => {
                Et(c.current, Wm),
                    c.current &&
                        (typeof s == 'number'
                            ? n.navigate(s)
                            : await n.navigate(s, { fromRouteId: i, ...f }))
            },
            [n, i],
        )
    )
}
var Tm = {}
function Im(n, i, c) {
    !i && !Tm[n] && ((Tm[n] = !0), Et(!1, c))
}
var xm = {}
function Am(n, i) {
    !n && !xm[i] && ((xm[i] = !0), console.warn(i))
}
function ag(n) {
    let i = {
        hasErrorBoundary:
            n.hasErrorBoundary ||
            n.ErrorBoundary != null ||
            n.errorElement != null,
    }
    return (
        n.Component &&
            (n.element &&
                Et(
                    !1,
                    'You should not include both `Component` and `element` on your route - `Component` will be used.',
                ),
            Object.assign(i, {
                element: _.createElement(n.Component),
                Component: void 0,
            })),
        n.HydrateFallback &&
            (n.hydrateFallbackElement &&
                Et(
                    !1,
                    'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.',
                ),
            Object.assign(i, {
                hydrateFallbackElement: _.createElement(n.HydrateFallback),
                HydrateFallback: void 0,
            })),
        n.ErrorBoundary &&
            (n.errorElement &&
                Et(
                    !1,
                    'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.',
                ),
            Object.assign(i, {
                errorElement: _.createElement(n.ErrorBoundary),
                ErrorBoundary: void 0,
            })),
        i
    )
}
var ng = class {
    constructor() {
        ;(this.status = 'pending'),
            (this.promise = new Promise((n, i) => {
                ;(this.resolve = (c) => {
                    this.status === 'pending' &&
                        ((this.status = 'resolved'), n(c))
                }),
                    (this.reject = (c) => {
                        this.status === 'pending' &&
                            ((this.status = 'rejected'), i(c))
                    })
            }))
    }
}
function ug({ router: n, flushSync: i }) {
    let [c, o] = _.useState(n.state),
        [s, f] = _.useState(),
        [h, v] = _.useState({ isTransitioning: !1 }),
        [p, m] = _.useState(),
        [g, x] = _.useState(),
        [O, D] = _.useState(),
        A = _.useRef(new Map()),
        Y = _.useCallback(
            (
                $,
                { deletedFetchers: oe, flushSync: F, viewTransitionOpts: C },
            ) => {
                $.fetchers.forEach((be, k) => {
                    be.data !== void 0 && A.current.set(k, be.data)
                }),
                    oe.forEach((be) => A.current.delete(be)),
                    Am(
                        F === !1 || i != null,
                        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
                    )
                let he =
                    n.window != null &&
                    n.window.document != null &&
                    typeof n.window.document.startViewTransition == 'function'
                if (
                    (Am(
                        C == null || he,
                        'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.',
                    ),
                    !C || !he)
                ) {
                    i && F ? i(() => o($)) : _.startTransition(() => o($))
                    return
                }
                if (i && F) {
                    i(() => {
                        g && (p && p.resolve(), g.skipTransition()),
                            v({
                                isTransitioning: !0,
                                flushSync: !0,
                                currentLocation: C.currentLocation,
                                nextLocation: C.nextLocation,
                            })
                    })
                    let be = n.window.document.startViewTransition(() => {
                        i(() => o($))
                    })
                    be.finished.finally(() => {
                        i(() => {
                            m(void 0),
                                x(void 0),
                                f(void 0),
                                v({ isTransitioning: !1 })
                        })
                    }),
                        i(() => x(be))
                    return
                }
                g
                    ? (p && p.resolve(),
                      g.skipTransition(),
                      D({
                          state: $,
                          currentLocation: C.currentLocation,
                          nextLocation: C.nextLocation,
                      }))
                    : (f($),
                      v({
                          isTransitioning: !0,
                          flushSync: !1,
                          currentLocation: C.currentLocation,
                          nextLocation: C.nextLocation,
                      }))
            },
            [n.window, i, g, p],
        )
    _.useLayoutEffect(() => n.subscribe(Y), [n, Y]),
        _.useEffect(() => {
            h.isTransitioning && !h.flushSync && m(new ng())
        }, [h]),
        _.useEffect(() => {
            if (p && s && n.window) {
                let $ = s,
                    oe = p.promise,
                    F = n.window.document.startViewTransition(async () => {
                        _.startTransition(() => o($)), await oe
                    })
                F.finished.finally(() => {
                    m(void 0), x(void 0), f(void 0), v({ isTransitioning: !1 })
                }),
                    x(F)
            }
        }, [s, p, n.window]),
        _.useEffect(() => {
            p && s && c.location.key === s.location.key && p.resolve()
        }, [p, g, c.location, s]),
        _.useEffect(() => {
            !h.isTransitioning &&
                O &&
                (f(O.state),
                v({
                    isTransitioning: !0,
                    flushSync: !1,
                    currentLocation: O.currentLocation,
                    nextLocation: O.nextLocation,
                }),
                D(void 0))
        }, [h.isTransitioning, O])
    let z = _.useMemo(
            () => ({
                createHref: n.createHref,
                encodeLocation: n.encodeLocation,
                go: ($) => n.navigate($),
                push: ($, oe, F) =>
                    n.navigate($, {
                        state: oe,
                        preventScrollReset:
                            F == null ? void 0 : F.preventScrollReset,
                    }),
                replace: ($, oe, F) =>
                    n.navigate($, {
                        replace: !0,
                        state: oe,
                        preventScrollReset:
                            F == null ? void 0 : F.preventScrollReset,
                    }),
            }),
            [n],
        ),
        q = n.basename || '/',
        V = _.useMemo(
            () => ({ router: n, navigator: z, static: !1, basename: q }),
            [n, z, q],
        )
    return _.createElement(
        _.Fragment,
        null,
        _.createElement(
            Ia.Provider,
            { value: V },
            _.createElement(
                Pu.Provider,
                { value: c },
                _.createElement(
                    $m.Provider,
                    { value: A.current },
                    _.createElement(
                        vs.Provider,
                        { value: h },
                        _.createElement(
                            cg,
                            {
                                basename: q,
                                location: c.location,
                                navigationType: c.historyAction,
                                navigator: z,
                            },
                            _.createElement(ig, {
                                routes: n.routes,
                                future: n.future,
                                state: c,
                            }),
                        ),
                    ),
                ),
            ),
        ),
        null,
    )
}
var ig = _.memo(rg)
function rg({ routes: n, future: i, state: c }) {
    return Zp(n, void 0, c, i)
}
function cg({
    basename: n = '/',
    children: i = null,
    location: c,
    navigationType: o = 'POP',
    navigator: s,
    static: f = !1,
}) {
    we(
        !Iu(),
        'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
    )
    let h = n.replace(/^\/*/, '/'),
        v = _.useMemo(
            () => ({ basename: h, navigator: s, static: f, future: {} }),
            [h, s, f],
        )
    typeof c == 'string' && (c = Ra(c))
    let {
            pathname: p = '/',
            search: m = '',
            hash: g = '',
            state: x = null,
            key: O = 'default',
        } = c,
        D = _.useMemo(() => {
            let A = dl(p, h)
            return A == null
                ? null
                : {
                      location: {
                          pathname: A,
                          search: m,
                          hash: g,
                          state: x,
                          key: O,
                      },
                      navigationType: o,
                  }
        }, [h, p, m, g, x, O, o])
    return (
        Et(
            D != null,
            `<Router basename="${h}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
        ),
        D == null
            ? null
            : _.createElement(
                  Al.Provider,
                  { value: v },
                  _.createElement(Dr.Provider, { children: i, value: D }),
              )
    )
}
var pr = 'get',
    gr = 'application/x-www-form-urlencoded'
function wr(n) {
    return n != null && typeof n.tagName == 'string'
}
function og(n) {
    return wr(n) && n.tagName.toLowerCase() === 'button'
}
function sg(n) {
    return wr(n) && n.tagName.toLowerCase() === 'form'
}
function fg(n) {
    return wr(n) && n.tagName.toLowerCase() === 'input'
}
function dg(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
function hg(n, i) {
    return n.button === 0 && (!i || i === '_self') && !dg(n)
}
var yr = null
function mg() {
    if (yr === null)
        try {
            new FormData(document.createElement('form'), 0), (yr = !1)
        } catch {
            yr = !0
        }
    return yr
}
var yg = new Set([
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'text/plain',
])
function Po(n) {
    return n != null && !yg.has(n)
        ? (Et(
              !1,
              `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${gr}"`,
          ),
          null)
        : n
}
function vg(n, i) {
    let c, o, s, f, h
    if (sg(n)) {
        let v = n.getAttribute('action')
        ;(o = v ? dl(v, i) : null),
            (c = n.getAttribute('method') || pr),
            (s = Po(n.getAttribute('enctype')) || gr),
            (f = new FormData(n))
    } else if (
        og(n) ||
        (fg(n) && (n.type === 'submit' || n.type === 'image'))
    ) {
        let v = n.form
        if (v == null)
            throw new Error(
                'Cannot submit a <button> or <input type="submit"> without a <form>',
            )
        let p = n.getAttribute('formaction') || v.getAttribute('action')
        if (
            ((o = p ? dl(p, i) : null),
            (c =
                n.getAttribute('formmethod') || v.getAttribute('method') || pr),
            (s =
                Po(n.getAttribute('formenctype')) ||
                Po(v.getAttribute('enctype')) ||
                gr),
            (f = new FormData(v, n)),
            !mg())
        ) {
            let { name: m, type: g, value: x } = n
            if (g === 'image') {
                let O = m ? `${m}.` : ''
                f.append(`${O}x`, '0'), f.append(`${O}y`, '0')
            } else m && f.append(m, x)
        }
    } else {
        if (wr(n))
            throw new Error(
                'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
            )
        ;(c = pr), (o = null), (s = gr), (h = n)
    }
    return (
        f && s === 'text/plain' && ((h = f), (f = void 0)),
        { action: o, method: c.toLowerCase(), encType: s, formData: f, body: h }
    )
}
function Ss(n, i) {
    if (n === !1 || n === null || typeof n > 'u') throw new Error(i)
}
async function pg(n, i) {
    if (n.id in i) return i[n.id]
    try {
        let c = await import(n.module)
        return (i[n.id] = c), c
    } catch (c) {
        return (
            console.error(
                `Error loading route module \`${n.module}\`, reloading page...`,
            ),
            console.error(c),
            window.__reactRouterContext &&
                window.__reactRouterContext.isSpaMode,
            window.location.reload(),
            new Promise(() => {})
        )
    }
}
function gg(n) {
    return n == null
        ? !1
        : n.href == null
          ? n.rel === 'preload' &&
            typeof n.imageSrcSet == 'string' &&
            typeof n.imageSizes == 'string'
          : typeof n.rel == 'string' && typeof n.href == 'string'
}
async function bg(n, i, c) {
    let o = await Promise.all(
        n.map(async (s) => {
            let f = i.routes[s.route.id]
            if (f) {
                let h = await pg(f, c)
                return h.links ? h.links() : []
            }
            return []
        }),
    )
    return Tg(
        o
            .flat(1)
            .filter(gg)
            .filter((s) => s.rel === 'stylesheet' || s.rel === 'preload')
            .map((s) =>
                s.rel === 'stylesheet'
                    ? { ...s, rel: 'prefetch', as: 'style' }
                    : { ...s, rel: 'prefetch' },
            ),
    )
}
function Om(n, i, c, o, s, f) {
    let h = (p, m) => (c[m] ? p.route.id !== c[m].route.id : !0),
        v = (p, m) => {
            var g
            return (
                c[m].pathname !== p.pathname ||
                (((g = c[m].route.path) == null ? void 0 : g.endsWith('*')) &&
                    c[m].params['*'] !== p.params['*'])
            )
        }
    return f === 'assets'
        ? i.filter((p, m) => h(p, m) || v(p, m))
        : f === 'data'
          ? i.filter((p, m) => {
                var x
                let g = o.routes[p.route.id]
                if (!g || !g.hasLoader) return !1
                if (h(p, m) || v(p, m)) return !0
                if (p.route.shouldRevalidate) {
                    let O = p.route.shouldRevalidate({
                        currentUrl: new URL(
                            s.pathname + s.search + s.hash,
                            window.origin,
                        ),
                        currentParams:
                            ((x = c[0]) == null ? void 0 : x.params) || {},
                        nextUrl: new URL(n, window.origin),
                        nextParams: p.params,
                        defaultShouldRevalidate: !0,
                    })
                    if (typeof O == 'boolean') return O
                }
                return !0
            })
          : []
}
function Sg(n, i, { includeHydrateFallback: c } = {}) {
    return Eg(
        n
            .map((o) => {
                let s = i.routes[o.route.id]
                if (!s) return []
                let f = [s.module]
                return (
                    s.clientActionModule &&
                        (f = f.concat(s.clientActionModule)),
                    s.clientLoaderModule &&
                        (f = f.concat(s.clientLoaderModule)),
                    c &&
                        s.hydrateFallbackModule &&
                        (f = f.concat(s.hydrateFallbackModule)),
                    s.imports && (f = f.concat(s.imports)),
                    f
                )
            })
            .flat(1),
    )
}
function Eg(n) {
    return [...new Set(n)]
}
function Rg(n) {
    let i = {},
        c = Object.keys(n).sort()
    for (let o of c) i[o] = n[o]
    return i
}
function Tg(n, i) {
    let c = new Set()
    return (
        new Set(i),
        n.reduce((o, s) => {
            let f = JSON.stringify(Rg(s))
            return c.has(f) || (c.add(f), o.push({ key: f, link: s })), o
        }, [])
    )
}
function xg(n) {
    let i =
        typeof n == 'string'
            ? new URL(
                  n,
                  typeof window > 'u'
                      ? 'server://singlefetch/'
                      : window.location.origin,
              )
            : n
    return (
        i.pathname === '/'
            ? (i.pathname = '_root.data')
            : (i.pathname = `${i.pathname.replace(/\/$/, '')}.data`),
        i
    )
}
function Ag() {
    let n = _.useContext(Ia)
    return (
        Ss(
            n,
            'You must render this element inside a <DataRouterContext.Provider> element',
        ),
        n
    )
}
function Og() {
    let n = _.useContext(Pu)
    return (
        Ss(
            n,
            'You must render this element inside a <DataRouterStateContext.Provider> element',
        ),
        n
    )
}
var Es = _.createContext(void 0)
Es.displayName = 'FrameworkContext'
function ey() {
    let n = _.useContext(Es)
    return (
        Ss(n, 'You must render this element inside a <HydratedRouter> element'),
        n
    )
}
function Dg(n, i) {
    let c = _.useContext(Es),
        [o, s] = _.useState(!1),
        [f, h] = _.useState(!1),
        {
            onFocus: v,
            onBlur: p,
            onMouseEnter: m,
            onMouseLeave: g,
            onTouchStart: x,
        } = i,
        O = _.useRef(null)
    _.useEffect(() => {
        if ((n === 'render' && h(!0), n === 'viewport')) {
            let Y = (q) => {
                    q.forEach((V) => {
                        h(V.isIntersecting)
                    })
                },
                z = new IntersectionObserver(Y, { threshold: 0.5 })
            return (
                O.current && z.observe(O.current),
                () => {
                    z.disconnect()
                }
            )
        }
    }, [n]),
        _.useEffect(() => {
            if (o) {
                let Y = setTimeout(() => {
                    h(!0)
                }, 100)
                return () => {
                    clearTimeout(Y)
                }
            }
        }, [o])
    let D = () => {
            s(!0)
        },
        A = () => {
            s(!1), h(!1)
        }
    return c
        ? n !== 'intent'
            ? [f, O, {}]
            : [
                  f,
                  O,
                  {
                      onFocus: Zu(v, D),
                      onBlur: Zu(p, A),
                      onMouseEnter: Zu(m, D),
                      onMouseLeave: Zu(g, A),
                      onTouchStart: Zu(x, D),
                  },
              ]
        : [!1, O, {}]
}
function Zu(n, i) {
    return (c) => {
        n && n(c), c.defaultPrevented || i(c)
    }
}
function wg({ page: n, ...i }) {
    let { router: c } = Ag(),
        o = _.useMemo(
            () => Sa(c.routes, n, c.basename),
            [c.routes, n, c.basename],
        )
    return o ? _.createElement(Cg, { page: n, matches: o, ...i }) : null
}
function Mg(n) {
    let { manifest: i, routeModules: c } = ey(),
        [o, s] = _.useState([])
    return (
        _.useEffect(() => {
            let f = !1
            return (
                bg(n, i, c).then((h) => {
                    f || s(h)
                }),
                () => {
                    f = !0
                }
            )
        }, [n, i, c]),
        o
    )
}
function Cg({ page: n, matches: i, ...c }) {
    let o = en(),
        { manifest: s, routeModules: f } = ey(),
        { loaderData: h, matches: v } = Og(),
        p = _.useMemo(() => Om(n, i, v, s, o, 'data'), [n, i, v, s, o]),
        m = _.useMemo(() => Om(n, i, v, s, o, 'assets'), [n, i, v, s, o]),
        g = _.useMemo(() => {
            if (n === o.pathname + o.search + o.hash) return []
            let D = new Set(),
                A = !1
            if (
                (i.forEach((z) => {
                    var V
                    let q = s.routes[z.route.id]
                    !q ||
                        !q.hasLoader ||
                        ((!p.some(($) => $.route.id === z.route.id) &&
                            z.route.id in h &&
                            (V = f[z.route.id]) != null &&
                            V.shouldRevalidate) ||
                        q.hasClientLoader
                            ? (A = !0)
                            : D.add(z.route.id))
                }),
                D.size === 0)
            )
                return []
            let Y = xg(n)
            return (
                A &&
                    D.size > 0 &&
                    Y.searchParams.set(
                        '_routes',
                        i
                            .filter((z) => D.has(z.route.id))
                            .map((z) => z.route.id)
                            .join(','),
                    ),
                [Y.pathname + Y.search]
            )
        }, [h, o, s, p, i, n, f]),
        x = _.useMemo(() => Sg(m, s), [m, s]),
        O = Mg(m)
    return _.createElement(
        _.Fragment,
        null,
        g.map((D) =>
            _.createElement('link', {
                key: D,
                rel: 'prefetch',
                as: 'fetch',
                href: D,
                ...c,
            }),
        ),
        x.map((D) =>
            _.createElement('link', {
                key: D,
                rel: 'modulepreload',
                href: D,
                ...c,
            }),
        ),
        O.map(({ key: D, link: A }) =>
            _.createElement('link', { key: D, ...A }),
        ),
    )
}
function _g(...n) {
    return (i) => {
        n.forEach((c) => {
            typeof c == 'function' ? c(i) : c != null && (c.current = i)
        })
    }
}
var ty =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u'
try {
    ty && (window.__reactRouterVersion = '7.2.0')
} catch {}
function Ug(n, i) {
    return Rp({
        basename: i == null ? void 0 : i.basename,
        future: i == null ? void 0 : i.future,
        history: Kv({ window: i == null ? void 0 : i.window }),
        hydrationData: zg(),
        routes: n,
        mapRouteProperties: ag,
        dataStrategy: i == null ? void 0 : i.dataStrategy,
        patchRoutesOnNavigation: i == null ? void 0 : i.patchRoutesOnNavigation,
        window: i == null ? void 0 : i.window,
    }).initialize()
}
function zg() {
    let n = window == null ? void 0 : window.__staticRouterHydrationData
    return n && n.errors && (n = { ...n, errors: Ng(n.errors) }), n
}
function Ng(n) {
    if (!n) return null
    let i = Object.entries(n),
        c = {}
    for (let [o, s] of i)
        if (s && s.__type === 'RouteErrorResponse')
            c[o] = new xr(s.status, s.statusText, s.data, s.internal === !0)
        else if (s && s.__type === 'Error') {
            if (s.__subType) {
                let f = window[s.__subType]
                if (typeof f == 'function')
                    try {
                        let h = new f(s.message)
                        ;(h.stack = ''), (c[o] = h)
                    } catch {}
            }
            if (c[o] == null) {
                let f = new Error(s.message)
                ;(f.stack = ''), (c[o] = f)
            }
        } else c[o] = s
    return c
}
var ly = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Rs = _.forwardRef(function (
        {
            onClick: i,
            discover: c = 'render',
            prefetch: o = 'none',
            relative: s,
            reloadDocument: f,
            replace: h,
            state: v,
            target: p,
            to: m,
            preventScrollReset: g,
            viewTransition: x,
            ...O
        },
        D,
    ) {
        let { basename: A } = _.useContext(Al),
            Y = typeof m == 'string' && ly.test(m),
            z,
            q = !1
        if (typeof m == 'string' && Y && ((z = m), ty))
            try {
                let k = new URL(window.location.href),
                    fe = m.startsWith('//')
                        ? new URL(k.protocol + m)
                        : new URL(m),
                    Le = dl(fe.pathname, A)
                fe.origin === k.origin && Le != null
                    ? (m = Le + fe.search + fe.hash)
                    : (q = !0)
            } catch {
                Et(
                    !1,
                    `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
                )
            }
        let V = Xp(m, { relative: s }),
            [$, oe, F] = Dg(o, O),
            C = Hg(m, {
                replace: h,
                state: v,
                target: p,
                preventScrollReset: g,
                relative: s,
                viewTransition: x,
            })
        function he(k) {
            i && i(k), k.defaultPrevented || C(k)
        }
        let be = _.createElement('a', {
            ...O,
            ...F,
            href: z || V,
            onClick: q || f ? i : he,
            ref: _g(D, oe),
            target: p,
            'data-discover': !Y && c === 'render' ? 'true' : void 0,
        })
        return $ && !Y
            ? _.createElement(
                  _.Fragment,
                  null,
                  be,
                  _.createElement(wg, { page: V }),
              )
            : be
    })
Rs.displayName = 'Link'
var qn = _.forwardRef(function (
    {
        'aria-current': i = 'page',
        caseSensitive: c = !1,
        className: o = '',
        end: s = !1,
        style: f,
        to: h,
        viewTransition: v,
        children: p,
        ...m
    },
    g,
) {
    let x = ei(h, { relative: m.relative }),
        O = en(),
        D = _.useContext(Pu),
        { navigator: A, basename: Y } = _.useContext(Al),
        z = D != null && Xg(x) && v === !0,
        q = A.encodeLocation ? A.encodeLocation(x).pathname : x.pathname,
        V = O.pathname,
        $ =
            D && D.navigation && D.navigation.location
                ? D.navigation.location.pathname
                : null
    c ||
        ((V = V.toLowerCase()),
        ($ = $ ? $.toLowerCase() : null),
        (q = q.toLowerCase())),
        $ && Y && ($ = dl($, Y) || $)
    const oe = q !== '/' && q.endsWith('/') ? q.length - 1 : q.length
    let F = V === q || (!s && V.startsWith(q) && V.charAt(oe) === '/'),
        C =
            $ != null &&
            ($ === q || (!s && $.startsWith(q) && $.charAt(q.length) === '/')),
        he = { isActive: F, isPending: C, isTransitioning: z },
        be = F ? i : void 0,
        k
    typeof o == 'function'
        ? (k = o(he))
        : (k = [
              o,
              F ? 'active' : null,
              C ? 'pending' : null,
              z ? 'transitioning' : null,
          ]
              .filter(Boolean)
              .join(' '))
    let fe = typeof f == 'function' ? f(he) : f
    return _.createElement(
        Rs,
        {
            ...m,
            'aria-current': be,
            className: k,
            ref: g,
            style: fe,
            to: h,
            viewTransition: v,
        },
        typeof p == 'function' ? p(he) : p,
    )
})
qn.displayName = 'NavLink'
var jg = _.forwardRef(
    (
        {
            discover: n = 'render',
            fetcherKey: i,
            navigate: c,
            reloadDocument: o,
            replace: s,
            state: f,
            method: h = pr,
            action: v,
            onSubmit: p,
            relative: m,
            preventScrollReset: g,
            viewTransition: x,
            ...O
        },
        D,
    ) => {
        let A = Yg(),
            Y = Gg(v, { relative: m }),
            z = h.toLowerCase() === 'get' ? 'get' : 'post',
            q = typeof v == 'string' && ly.test(v),
            V = ($) => {
                if ((p && p($), $.defaultPrevented)) return
                $.preventDefault()
                let oe = $.nativeEvent.submitter,
                    F =
                        (oe == null ? void 0 : oe.getAttribute('formmethod')) ||
                        h
                A(oe || $.currentTarget, {
                    fetcherKey: i,
                    method: F,
                    navigate: c,
                    replace: s,
                    state: f,
                    relative: m,
                    preventScrollReset: g,
                    viewTransition: x,
                })
            }
        return _.createElement('form', {
            ref: D,
            method: z,
            action: Y,
            onSubmit: o ? p : V,
            ...O,
            'data-discover': !q && n === 'render' ? 'true' : void 0,
        })
    },
)
jg.displayName = 'Form'
function Lg(n) {
    return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function ay(n) {
    let i = _.useContext(Ia)
    return we(i, Lg(n)), i
}
function Hg(
    n,
    {
        target: i,
        replace: c,
        state: o,
        preventScrollReset: s,
        relative: f,
        viewTransition: h,
    } = {},
) {
    let v = Vp(),
        p = en(),
        m = ei(n, { relative: f })
    return _.useCallback(
        (g) => {
            if (hg(g, i)) {
                g.preventDefault()
                let x = c !== void 0 ? c : Ea(p) === Ea(m)
                v(n, {
                    replace: x,
                    state: o,
                    preventScrollReset: s,
                    relative: f,
                    viewTransition: h,
                })
            }
        },
        [p, v, m, c, o, i, n, s, f, h],
    )
}
var Bg = 0,
    qg = () => `__${String(++Bg)}__`
function Yg() {
    let { router: n } = ay('useSubmit'),
        { basename: i } = _.useContext(Al),
        c = eg()
    return _.useCallback(
        async (o, s = {}) => {
            let {
                action: f,
                method: h,
                encType: v,
                formData: p,
                body: m,
            } = vg(o, i)
            if (s.navigate === !1) {
                let g = s.fetcherKey || qg()
                await n.fetch(g, c, s.action || f, {
                    preventScrollReset: s.preventScrollReset,
                    formData: p,
                    body: m,
                    formMethod: s.method || h,
                    formEncType: s.encType || v,
                    flushSync: s.flushSync,
                })
            } else
                await n.navigate(s.action || f, {
                    preventScrollReset: s.preventScrollReset,
                    formData: p,
                    body: m,
                    formMethod: s.method || h,
                    formEncType: s.encType || v,
                    replace: s.replace,
                    state: s.state,
                    fromRouteId: c,
                    flushSync: s.flushSync,
                    viewTransition: s.viewTransition,
                })
        },
        [n, i, c],
    )
}
function Gg(n, { relative: i } = {}) {
    let { basename: c } = _.useContext(Al),
        o = _.useContext(kl)
    we(o, 'useFormAction must be used inside a RouteContext')
    let [s] = o.matches.slice(-1),
        f = { ...ei(n || '.', { relative: i }) },
        h = en()
    if (n == null) {
        f.search = h.search
        let v = new URLSearchParams(f.search),
            p = v.getAll('index')
        if (p.some((g) => g === '')) {
            v.delete('index'),
                p.filter((x) => x).forEach((x) => v.append('index', x))
            let g = v.toString()
            f.search = g ? `?${g}` : ''
        }
    }
    return (
        (!n || n === '.') &&
            s.route.index &&
            (f.search = f.search
                ? f.search.replace(/^\?/, '?index&')
                : '?index'),
        c !== '/' &&
            (f.pathname = f.pathname === '/' ? c : xl([c, f.pathname])),
        Ea(f)
    )
}
function Xg(n, i = {}) {
    let c = _.useContext(vs)
    we(
        c != null,
        "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
    )
    let { basename: o } = ay('useViewTransitionState'),
        s = ei(n, { relative: i.relative })
    if (!c.isTransitioning) return !1
    let f = dl(c.currentLocation.pathname, o) || c.currentLocation.pathname,
        h = dl(c.nextLocation.pathname, o) || c.nextLocation.pathname
    return Tr(s.pathname, h) != null || Tr(s.pathname, f) != null
}
new TextEncoder()
var Vg = Ym()
/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qg(n) {
    return _.createElement(ug, { flushSync: Vg.flushSync, ...n })
}
const Mr = _.createContext(),
    Zg = ({ children: n }) => {
        const [i, c] = _.useState(!1),
            [o, s] = _.useState(!0)
        if (
            (_.useEffect(() => {
                const v = localStorage.getItem('jwtToken')
                c(!!v), s(!1)
            }, []),
            o)
        )
            return null
        const f = () => {
                try {
                    localStorage.removeItem('jwtToken'),
                        c(!1),
                        setTimeout(() => (window.location.href = '/login'), 1e3)
                } catch (v) {
                    console.error('Logout error:', v),
                        alert('error', 'Failed to log out. Please try again.')
                }
            },
            h = (v, p) => {
                try {
                    localStorage.setItem('jwtToken', v),
                        localStorage.setItem('userId', p),
                        c(!0),
                        setTimeout(() => (window.location.href = '/'), 1e3)
                } catch (m) {
                    console.error('Login error:', m),
                        alert('error', 'Failed to log in. Please try again.')
                }
            }
        return H.jsx(Mr.Provider, {
            value: { isAuthenticated: i, login: h, logout: f },
            children: n,
        })
    },
    Jl = _.createContext(),
    Kg = ({ children: n }) => {
        const [i, c] = _.useState(
            () => localStorage.getItem('theme') === 'dark',
        )
        return (
            _.useEffect(() => {
                localStorage.setItem('theme', i ? 'dark' : 'light')
            }, [i]),
            H.jsx(Jl.Provider, {
                value: { darkMode: i, setDarkMode: c },
                children: n,
            })
        )
    },
    kg = () => {
        const { darkMode: n, setDarkMode: i } = _.useContext(Jl),
            c = () => {
                i((o) => !o)
            }
        return H.jsx('div', {
            children: H.jsx('button', {
                onClick: c,
                style: {
                    background: '#313f58',
                    border: '1px solid #313f58',
                    cursor: 'pointer',
                    padding: '10px',
                    color: 'white',
                },
                children: n ? 'Switch to light Mode' : 'Switch to dark Mode',
            }),
        })
    },
    Yn = () => {
        const { isAuthenticated: n, logout: i } = _.useContext(Mr),
            { darkMode: c, setDarkMode: o } = _.useContext(Jl)
        return H.jsxs('div', {
            className: 'navbar-container',
            children: [
                H.jsx('div', {
                    className: 'navbar-title',
                    children: H.jsx(Rs, {
                        to: '/',
                        children: H.jsx('h1', {
                            style: { color: c ? 'white' : 'black' },
                            children: 'Job Hitlist',
                        }),
                    }),
                }),
                H.jsx(kg, { darkMode: c, setDarkMode: o }),
                H.jsx('div', {
                    className: 'navbar-items',
                    children: H.jsxs('ul', {
                        className: 'navbar-ul',
                        children: [
                            H.jsx(qn, {
                                to: '/',
                                className: ({ isActive: s }) =>
                                    s ? 'highlight' : '',
                                style: { color: c ? 'white' : 'black' },
                                children: H.jsx('li', { children: 'Home' }),
                            }),
                            H.jsx(qn, {
                                to: '/hitlist',
                                className: ({ isActive: s }) =>
                                    s ? 'highlight' : '',
                                style: { color: c ? 'white' : 'black' },
                                children: H.jsx('li', { children: 'Hitlist' }),
                            }),
                            H.jsx(qn, {
                                to: '/contacts',
                                className: ({ isActive: s }) =>
                                    s ? 'highlight' : '',
                                style: { color: c ? 'white' : 'black' },
                                children: H.jsx('li', { children: 'Contacts' }),
                            }),
                            n
                                ? H.jsx('li', {
                                      onClick: i,
                                      className: 'logout-button',
                                      style: {
                                          cursor: 'pointer',
                                          color: c ? 'white' : 'black',
                                      },
                                      children: 'Logout',
                                  })
                                : H.jsxs(H.Fragment, {
                                      children: [
                                          H.jsx(qn, {
                                              to: '/login',
                                              className: ({ isActive: s }) =>
                                                  s ? 'highlight' : '',
                                              style: {
                                                  color: c ? 'white' : 'black',
                                              },
                                              children: H.jsx('li', {
                                                  children: 'Login',
                                              }),
                                          }),
                                          H.jsx(qn, {
                                              to: '/signup',
                                              className: ({ isActive: s }) =>
                                                  s ? 'highlight' : '',
                                              style: {
                                                  color: c ? 'white' : 'black',
                                              },
                                              children: H.jsx('li', {
                                                  children: 'Sign Up',
                                              }),
                                          }),
                                      ],
                                  }),
                        ],
                    }),
                }),
            ],
        })
    }
function ny(n, i) {
    return function () {
        return n.apply(i, arguments)
    }
}
const { toString: Jg } = Object.prototype,
    { getPrototypeOf: Ts } = Object,
    Cr = ((n) => (i) => {
        const c = Jg.call(i)
        return n[c] || (n[c] = c.slice(8, -1).toLowerCase())
    })(Object.create(null)),
    hl = (n) => ((n = n.toLowerCase()), (i) => Cr(i) === n),
    _r = (n) => (i) => typeof i === n,
    { isArray: Gn } = Array,
    Wu = _r('undefined')
function Fg(n) {
    return (
        n !== null &&
        !Wu(n) &&
        n.constructor !== null &&
        !Wu(n.constructor) &&
        Gt(n.constructor.isBuffer) &&
        n.constructor.isBuffer(n)
    )
}
const uy = hl('ArrayBuffer')
function $g(n) {
    let i
    return (
        typeof ArrayBuffer < 'u' && ArrayBuffer.isView
            ? (i = ArrayBuffer.isView(n))
            : (i = n && n.buffer && uy(n.buffer)),
        i
    )
}
const Wg = _r('string'),
    Gt = _r('function'),
    iy = _r('number'),
    Ur = (n) => n !== null && typeof n == 'object',
    Pg = (n) => n === !0 || n === !1,
    br = (n) => {
        if (Cr(n) !== 'object') return !1
        const i = Ts(n)
        return (
            (i === null ||
                i === Object.prototype ||
                Object.getPrototypeOf(i) === null) &&
            !(Symbol.toStringTag in n) &&
            !(Symbol.iterator in n)
        )
    },
    Ig = hl('Date'),
    eb = hl('File'),
    tb = hl('Blob'),
    lb = hl('FileList'),
    ab = (n) => Ur(n) && Gt(n.pipe),
    nb = (n) => {
        let i
        return (
            n &&
            ((typeof FormData == 'function' && n instanceof FormData) ||
                (Gt(n.append) &&
                    ((i = Cr(n)) === 'formdata' ||
                        (i === 'object' &&
                            Gt(n.toString) &&
                            n.toString() === '[object FormData]'))))
        )
    },
    ub = hl('URLSearchParams'),
    [ib, rb, cb, ob] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
        hl,
    ),
    sb = (n) =>
        n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function ti(n, i, { allOwnKeys: c = !1 } = {}) {
    if (n === null || typeof n > 'u') return
    let o, s
    if ((typeof n != 'object' && (n = [n]), Gn(n)))
        for (o = 0, s = n.length; o < s; o++) i.call(null, n[o], o, n)
    else {
        const f = c ? Object.getOwnPropertyNames(n) : Object.keys(n),
            h = f.length
        let v
        for (o = 0; o < h; o++) (v = f[o]), i.call(null, n[v], v, n)
    }
}
function ry(n, i) {
    i = i.toLowerCase()
    const c = Object.keys(n)
    let o = c.length,
        s
    for (; o-- > 0; ) if (((s = c[o]), i === s.toLowerCase())) return s
    return null
}
const $a =
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
              ? self
              : typeof window < 'u'
                ? window
                : global,
    cy = (n) => !Wu(n) && n !== $a
function us() {
    const { caseless: n } = (cy(this) && this) || {},
        i = {},
        c = (o, s) => {
            const f = (n && ry(i, s)) || s
            br(i[f]) && br(o)
                ? (i[f] = us(i[f], o))
                : br(o)
                  ? (i[f] = us({}, o))
                  : Gn(o)
                    ? (i[f] = o.slice())
                    : (i[f] = o)
        }
    for (let o = 0, s = arguments.length; o < s; o++)
        arguments[o] && ti(arguments[o], c)
    return i
}
const fb = (n, i, c, { allOwnKeys: o } = {}) => (
        ti(
            i,
            (s, f) => {
                c && Gt(s) ? (n[f] = ny(s, c)) : (n[f] = s)
            },
            { allOwnKeys: o },
        ),
        n
    ),
    db = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
    hb = (n, i, c, o) => {
        ;(n.prototype = Object.create(i.prototype, o)),
            (n.prototype.constructor = n),
            Object.defineProperty(n, 'super', { value: i.prototype }),
            c && Object.assign(n.prototype, c)
    },
    mb = (n, i, c, o) => {
        let s, f, h
        const v = {}
        if (((i = i || {}), n == null)) return i
        do {
            for (s = Object.getOwnPropertyNames(n), f = s.length; f-- > 0; )
                (h = s[f]),
                    (!o || o(h, n, i)) && !v[h] && ((i[h] = n[h]), (v[h] = !0))
            n = c !== !1 && Ts(n)
        } while (n && (!c || c(n, i)) && n !== Object.prototype)
        return i
    },
    yb = (n, i, c) => {
        ;(n = String(n)),
            (c === void 0 || c > n.length) && (c = n.length),
            (c -= i.length)
        const o = n.indexOf(i, c)
        return o !== -1 && o === c
    },
    vb = (n) => {
        if (!n) return null
        if (Gn(n)) return n
        let i = n.length
        if (!iy(i)) return null
        const c = new Array(i)
        for (; i-- > 0; ) c[i] = n[i]
        return c
    },
    pb = (
        (n) => (i) =>
            n && i instanceof n
    )(typeof Uint8Array < 'u' && Ts(Uint8Array)),
    gb = (n, i) => {
        const o = (n && n[Symbol.iterator]).call(n)
        let s
        for (; (s = o.next()) && !s.done; ) {
            const f = s.value
            i.call(n, f[0], f[1])
        }
    },
    bb = (n, i) => {
        let c
        const o = []
        for (; (c = n.exec(i)) !== null; ) o.push(c)
        return o
    },
    Sb = hl('HTMLFormElement'),
    Eb = (n) =>
        n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (c, o, s) {
            return o.toUpperCase() + s
        }),
    Dm = (
        ({ hasOwnProperty: n }) =>
        (i, c) =>
            n.call(i, c)
    )(Object.prototype),
    Rb = hl('RegExp'),
    oy = (n, i) => {
        const c = Object.getOwnPropertyDescriptors(n),
            o = {}
        ti(c, (s, f) => {
            let h
            ;(h = i(s, f, n)) !== !1 && (o[f] = h || s)
        }),
            Object.defineProperties(n, o)
    },
    Tb = (n) => {
        oy(n, (i, c) => {
            if (Gt(n) && ['arguments', 'caller', 'callee'].indexOf(c) !== -1)
                return !1
            const o = n[c]
            if (Gt(o)) {
                if (((i.enumerable = !1), 'writable' in i)) {
                    i.writable = !1
                    return
                }
                i.set ||
                    (i.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + c + "'",
                        )
                    })
            }
        })
    },
    xb = (n, i) => {
        const c = {},
            o = (s) => {
                s.forEach((f) => {
                    c[f] = !0
                })
            }
        return Gn(n) ? o(n) : o(String(n).split(i)), c
    },
    Ab = () => {},
    Ob = (n, i) => (n != null && Number.isFinite((n = +n)) ? n : i)
function Db(n) {
    return !!(
        n &&
        Gt(n.append) &&
        n[Symbol.toStringTag] === 'FormData' &&
        n[Symbol.iterator]
    )
}
const wb = (n) => {
        const i = new Array(10),
            c = (o, s) => {
                if (Ur(o)) {
                    if (i.indexOf(o) >= 0) return
                    if (!('toJSON' in o)) {
                        i[s] = o
                        const f = Gn(o) ? [] : {}
                        return (
                            ti(o, (h, v) => {
                                const p = c(h, s + 1)
                                !Wu(p) && (f[v] = p)
                            }),
                            (i[s] = void 0),
                            f
                        )
                    }
                }
                return o
            }
        return c(n, 0)
    },
    Mb = hl('AsyncFunction'),
    Cb = (n) => n && (Ur(n) || Gt(n)) && Gt(n.then) && Gt(n.catch),
    sy = ((n, i) =>
        n
            ? setImmediate
            : i
              ? ((c, o) => (
                    $a.addEventListener(
                        'message',
                        ({ source: s, data: f }) => {
                            s === $a && f === c && o.length && o.shift()()
                        },
                        !1,
                    ),
                    (s) => {
                        o.push(s), $a.postMessage(c, '*')
                    }
                ))(`axios@${Math.random()}`, [])
              : (c) => setTimeout(c))(
        typeof setImmediate == 'function',
        Gt($a.postMessage),
    ),
    _b =
        typeof queueMicrotask < 'u'
            ? queueMicrotask.bind($a)
            : (typeof process < 'u' && process.nextTick) || sy,
    L = {
        isArray: Gn,
        isArrayBuffer: uy,
        isBuffer: Fg,
        isFormData: nb,
        isArrayBufferView: $g,
        isString: Wg,
        isNumber: iy,
        isBoolean: Pg,
        isObject: Ur,
        isPlainObject: br,
        isReadableStream: ib,
        isRequest: rb,
        isResponse: cb,
        isHeaders: ob,
        isUndefined: Wu,
        isDate: Ig,
        isFile: eb,
        isBlob: tb,
        isRegExp: Rb,
        isFunction: Gt,
        isStream: ab,
        isURLSearchParams: ub,
        isTypedArray: pb,
        isFileList: lb,
        forEach: ti,
        merge: us,
        extend: fb,
        trim: sb,
        stripBOM: db,
        inherits: hb,
        toFlatObject: mb,
        kindOf: Cr,
        kindOfTest: hl,
        endsWith: yb,
        toArray: vb,
        forEachEntry: gb,
        matchAll: bb,
        isHTMLForm: Sb,
        hasOwnProperty: Dm,
        hasOwnProp: Dm,
        reduceDescriptors: oy,
        freezeMethods: Tb,
        toObjectSet: xb,
        toCamelCase: Eb,
        noop: Ab,
        toFiniteNumber: Ob,
        findKey: ry,
        global: $a,
        isContextDefined: cy,
        isSpecCompliantForm: Db,
        toJSONObject: wb,
        isAsyncFn: Mb,
        isThenable: Cb,
        setImmediate: sy,
        asap: _b,
    }
function Se(n, i, c, o, s) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = n),
        (this.name = 'AxiosError'),
        i && (this.code = i),
        c && (this.config = c),
        o && (this.request = o),
        s && ((this.response = s), (this.status = s.status ? s.status : null))
}
L.inherits(Se, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: L.toJSONObject(this.config),
            code: this.code,
            status: this.status,
        }
    },
})
const fy = Se.prototype,
    dy = {}
;[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
].forEach((n) => {
    dy[n] = { value: n }
})
Object.defineProperties(Se, dy)
Object.defineProperty(fy, 'isAxiosError', { value: !0 })
Se.from = (n, i, c, o, s, f) => {
    const h = Object.create(fy)
    return (
        L.toFlatObject(
            n,
            h,
            function (p) {
                return p !== Error.prototype
            },
            (v) => v !== 'isAxiosError',
        ),
        Se.call(h, n.message, i, c, o, s),
        (h.cause = n),
        (h.name = n.name),
        f && Object.assign(h, f),
        h
    )
}
const Ub = null
function is(n) {
    return L.isPlainObject(n) || L.isArray(n)
}
function hy(n) {
    return L.endsWith(n, '[]') ? n.slice(0, -2) : n
}
function wm(n, i, c) {
    return n
        ? n
              .concat(i)
              .map(function (s, f) {
                  return (s = hy(s)), !c && f ? '[' + s + ']' : s
              })
              .join(c ? '.' : '')
        : i
}
function zb(n) {
    return L.isArray(n) && !n.some(is)
}
const Nb = L.toFlatObject(L, {}, null, function (i) {
    return /^is[A-Z]/.test(i)
})
function zr(n, i, c) {
    if (!L.isObject(n)) throw new TypeError('target must be an object')
    ;(i = i || new FormData()),
        (c = L.toFlatObject(
            c,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (Y, z) {
                return !L.isUndefined(z[Y])
            },
        ))
    const o = c.metaTokens,
        s = c.visitor || g,
        f = c.dots,
        h = c.indexes,
        p = (c.Blob || (typeof Blob < 'u' && Blob)) && L.isSpecCompliantForm(i)
    if (!L.isFunction(s)) throw new TypeError('visitor must be a function')
    function m(A) {
        if (A === null) return ''
        if (L.isDate(A)) return A.toISOString()
        if (!p && L.isBlob(A))
            throw new Se('Blob is not supported. Use a Buffer instead.')
        return L.isArrayBuffer(A) || L.isTypedArray(A)
            ? p && typeof Blob == 'function'
                ? new Blob([A])
                : Buffer.from(A)
            : A
    }
    function g(A, Y, z) {
        let q = A
        if (A && !z && typeof A == 'object') {
            if (L.endsWith(Y, '{}'))
                (Y = o ? Y : Y.slice(0, -2)), (A = JSON.stringify(A))
            else if (
                (L.isArray(A) && zb(A)) ||
                ((L.isFileList(A) || L.endsWith(Y, '[]')) && (q = L.toArray(A)))
            )
                return (
                    (Y = hy(Y)),
                    q.forEach(function ($, oe) {
                        !(L.isUndefined($) || $ === null) &&
                            i.append(
                                h === !0
                                    ? wm([Y], oe, f)
                                    : h === null
                                      ? Y
                                      : Y + '[]',
                                m($),
                            )
                    }),
                    !1
                )
        }
        return is(A) ? !0 : (i.append(wm(z, Y, f), m(A)), !1)
    }
    const x = [],
        O = Object.assign(Nb, {
            defaultVisitor: g,
            convertValue: m,
            isVisitable: is,
        })
    function D(A, Y) {
        if (!L.isUndefined(A)) {
            if (x.indexOf(A) !== -1)
                throw Error('Circular reference detected in ' + Y.join('.'))
            x.push(A),
                L.forEach(A, function (q, V) {
                    ;(!(L.isUndefined(q) || q === null) &&
                        s.call(i, q, L.isString(V) ? V.trim() : V, Y, O)) ===
                        !0 && D(q, Y ? Y.concat(V) : [V])
                }),
                x.pop()
        }
    }
    if (!L.isObject(n)) throw new TypeError('data must be an object')
    return D(n), i
}
function Mm(n) {
    const i = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\0',
    }
    return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (o) {
        return i[o]
    })
}
function xs(n, i) {
    ;(this._pairs = []), n && zr(n, this, i)
}
const my = xs.prototype
my.append = function (i, c) {
    this._pairs.push([i, c])
}
my.toString = function (i) {
    const c = i
        ? function (o) {
              return i.call(this, o, Mm)
          }
        : Mm
    return this._pairs
        .map(function (s) {
            return c(s[0]) + '=' + c(s[1])
        }, '')
        .join('&')
}
function jb(n) {
    return encodeURIComponent(n)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
}
function yy(n, i, c) {
    if (!i) return n
    const o = (c && c.encode) || jb
    L.isFunction(c) && (c = { serialize: c })
    const s = c && c.serialize
    let f
    if (
        (s
            ? (f = s(i, c))
            : (f = L.isURLSearchParams(i)
                  ? i.toString()
                  : new xs(i, c).toString(o)),
        f)
    ) {
        const h = n.indexOf('#')
        h !== -1 && (n = n.slice(0, h)),
            (n += (n.indexOf('?') === -1 ? '?' : '&') + f)
    }
    return n
}
class Cm {
    constructor() {
        this.handlers = []
    }
    use(i, c, o) {
        return (
            this.handlers.push({
                fulfilled: i,
                rejected: c,
                synchronous: o ? o.synchronous : !1,
                runWhen: o ? o.runWhen : null,
            }),
            this.handlers.length - 1
        )
    }
    eject(i) {
        this.handlers[i] && (this.handlers[i] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(i) {
        L.forEach(this.handlers, function (o) {
            o !== null && i(o)
        })
    }
}
const vy = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    Lb = typeof URLSearchParams < 'u' ? URLSearchParams : xs,
    Hb = typeof FormData < 'u' ? FormData : null,
    Bb = typeof Blob < 'u' ? Blob : null,
    qb = {
        isBrowser: !0,
        classes: { URLSearchParams: Lb, FormData: Hb, Blob: Bb },
        protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    },
    As = typeof window < 'u' && typeof document < 'u',
    rs = (typeof navigator == 'object' && navigator) || void 0,
    Yb =
        As &&
        (!rs || ['ReactNative', 'NativeScript', 'NS'].indexOf(rs.product) < 0),
    Gb =
        typeof WorkerGlobalScope < 'u' &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == 'function',
    Xb = (As && window.location.href) || 'http://localhost',
    Vb = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: As,
                hasStandardBrowserEnv: Yb,
                hasStandardBrowserWebWorkerEnv: Gb,
                navigator: rs,
                origin: Xb,
            },
            Symbol.toStringTag,
            { value: 'Module' },
        ),
    ),
    At = { ...Vb, ...qb }
function Qb(n, i) {
    return zr(
        n,
        new At.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (c, o, s, f) {
                    return At.isNode && L.isBuffer(c)
                        ? (this.append(o, c.toString('base64')), !1)
                        : f.defaultVisitor.apply(this, arguments)
                },
            },
            i,
        ),
    )
}
function Zb(n) {
    return L.matchAll(/\w+|\[(\w*)]/g, n).map((i) =>
        i[0] === '[]' ? '' : i[1] || i[0],
    )
}
function Kb(n) {
    const i = {},
        c = Object.keys(n)
    let o
    const s = c.length
    let f
    for (o = 0; o < s; o++) (f = c[o]), (i[f] = n[f])
    return i
}
function py(n) {
    function i(c, o, s, f) {
        let h = c[f++]
        if (h === '__proto__') return !0
        const v = Number.isFinite(+h),
            p = f >= c.length
        return (
            (h = !h && L.isArray(s) ? s.length : h),
            p
                ? (L.hasOwnProp(s, h) ? (s[h] = [s[h], o]) : (s[h] = o), !v)
                : ((!s[h] || !L.isObject(s[h])) && (s[h] = []),
                  i(c, o, s[h], f) && L.isArray(s[h]) && (s[h] = Kb(s[h])),
                  !v)
        )
    }
    if (L.isFormData(n) && L.isFunction(n.entries)) {
        const c = {}
        return (
            L.forEachEntry(n, (o, s) => {
                i(Zb(o), s, c, 0)
            }),
            c
        )
    }
    return null
}
function kb(n, i, c) {
    if (L.isString(n))
        try {
            return (i || JSON.parse)(n), L.trim(n)
        } catch (o) {
            if (o.name !== 'SyntaxError') throw o
        }
    return (c || JSON.stringify)(n)
}
const li = {
    transitional: vy,
    adapter: ['xhr', 'http', 'fetch'],
    transformRequest: [
        function (i, c) {
            const o = c.getContentType() || '',
                s = o.indexOf('application/json') > -1,
                f = L.isObject(i)
            if (
                (f && L.isHTMLForm(i) && (i = new FormData(i)), L.isFormData(i))
            )
                return s ? JSON.stringify(py(i)) : i
            if (
                L.isArrayBuffer(i) ||
                L.isBuffer(i) ||
                L.isStream(i) ||
                L.isFile(i) ||
                L.isBlob(i) ||
                L.isReadableStream(i)
            )
                return i
            if (L.isArrayBufferView(i)) return i.buffer
            if (L.isURLSearchParams(i))
                return (
                    c.setContentType(
                        'application/x-www-form-urlencoded;charset=utf-8',
                        !1,
                    ),
                    i.toString()
                )
            let v
            if (f) {
                if (o.indexOf('application/x-www-form-urlencoded') > -1)
                    return Qb(i, this.formSerializer).toString()
                if (
                    (v = L.isFileList(i)) ||
                    o.indexOf('multipart/form-data') > -1
                ) {
                    const p = this.env && this.env.FormData
                    return zr(
                        v ? { 'files[]': i } : i,
                        p && new p(),
                        this.formSerializer,
                    )
                }
            }
            return f || s
                ? (c.setContentType('application/json', !1), kb(i))
                : i
        },
    ],
    transformResponse: [
        function (i) {
            const c = this.transitional || li.transitional,
                o = c && c.forcedJSONParsing,
                s = this.responseType === 'json'
            if (L.isResponse(i) || L.isReadableStream(i)) return i
            if (i && L.isString(i) && ((o && !this.responseType) || s)) {
                const h = !(c && c.silentJSONParsing) && s
                try {
                    return JSON.parse(i)
                } catch (v) {
                    if (h)
                        throw v.name === 'SyntaxError'
                            ? Se.from(
                                  v,
                                  Se.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response,
                              )
                            : v
                }
            }
            return i
        },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: At.classes.FormData, Blob: At.classes.Blob },
    validateStatus: function (i) {
        return i >= 200 && i < 300
    },
    headers: {
        common: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': void 0,
        },
    },
}
L.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (n) => {
    li.headers[n] = {}
})
const Jb = L.toObjectSet([
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
    ]),
    Fb = (n) => {
        const i = {}
        let c, o, s
        return (
            n &&
                n
                    .split(
                        `
`,
                    )
                    .forEach(function (h) {
                        ;(s = h.indexOf(':')),
                            (c = h.substring(0, s).trim().toLowerCase()),
                            (o = h.substring(s + 1).trim()),
                            !(!c || (i[c] && Jb[c])) &&
                                (c === 'set-cookie'
                                    ? i[c]
                                        ? i[c].push(o)
                                        : (i[c] = [o])
                                    : (i[c] = i[c] ? i[c] + ', ' + o : o))
                    }),
            i
        )
    },
    _m = Symbol('internals')
function Ku(n) {
    return n && String(n).trim().toLowerCase()
}
function Sr(n) {
    return n === !1 || n == null ? n : L.isArray(n) ? n.map(Sr) : String(n)
}
function $b(n) {
    const i = Object.create(null),
        c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
    let o
    for (; (o = c.exec(n)); ) i[o[1]] = o[2]
    return i
}
const Wb = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim())
function Io(n, i, c, o, s) {
    if (L.isFunction(o)) return o.call(this, i, c)
    if ((s && (i = c), !!L.isString(i))) {
        if (L.isString(o)) return i.indexOf(o) !== -1
        if (L.isRegExp(o)) return o.test(i)
    }
}
function Pb(n) {
    return n
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (i, c, o) => c.toUpperCase() + o)
}
function Ib(n, i) {
    const c = L.toCamelCase(' ' + i)
    ;['get', 'set', 'has'].forEach((o) => {
        Object.defineProperty(n, o + c, {
            value: function (s, f, h) {
                return this[o].call(this, i, s, f, h)
            },
            configurable: !0,
        })
    })
}
let zt = class {
    constructor(i) {
        i && this.set(i)
    }
    set(i, c, o) {
        const s = this
        function f(v, p, m) {
            const g = Ku(p)
            if (!g) throw new Error('header name must be a non-empty string')
            const x = L.findKey(s, g)
            ;(!x ||
                s[x] === void 0 ||
                m === !0 ||
                (m === void 0 && s[x] !== !1)) &&
                (s[x || p] = Sr(v))
        }
        const h = (v, p) => L.forEach(v, (m, g) => f(m, g, p))
        if (L.isPlainObject(i) || i instanceof this.constructor) h(i, c)
        else if (L.isString(i) && (i = i.trim()) && !Wb(i)) h(Fb(i), c)
        else if (L.isHeaders(i)) for (const [v, p] of i.entries()) f(p, v, o)
        else i != null && f(c, i, o)
        return this
    }
    get(i, c) {
        if (((i = Ku(i)), i)) {
            const o = L.findKey(this, i)
            if (o) {
                const s = this[o]
                if (!c) return s
                if (c === !0) return $b(s)
                if (L.isFunction(c)) return c.call(this, s, o)
                if (L.isRegExp(c)) return c.exec(s)
                throw new TypeError('parser must be boolean|regexp|function')
            }
        }
    }
    has(i, c) {
        if (((i = Ku(i)), i)) {
            const o = L.findKey(this, i)
            return !!(
                o &&
                this[o] !== void 0 &&
                (!c || Io(this, this[o], o, c))
            )
        }
        return !1
    }
    delete(i, c) {
        const o = this
        let s = !1
        function f(h) {
            if (((h = Ku(h)), h)) {
                const v = L.findKey(o, h)
                v && (!c || Io(o, o[v], v, c)) && (delete o[v], (s = !0))
            }
        }
        return L.isArray(i) ? i.forEach(f) : f(i), s
    }
    clear(i) {
        const c = Object.keys(this)
        let o = c.length,
            s = !1
        for (; o--; ) {
            const f = c[o]
            ;(!i || Io(this, this[f], f, i, !0)) && (delete this[f], (s = !0))
        }
        return s
    }
    normalize(i) {
        const c = this,
            o = {}
        return (
            L.forEach(this, (s, f) => {
                const h = L.findKey(o, f)
                if (h) {
                    ;(c[h] = Sr(s)), delete c[f]
                    return
                }
                const v = i ? Pb(f) : String(f).trim()
                v !== f && delete c[f], (c[v] = Sr(s)), (o[v] = !0)
            }),
            this
        )
    }
    concat(...i) {
        return this.constructor.concat(this, ...i)
    }
    toJSON(i) {
        const c = Object.create(null)
        return (
            L.forEach(this, (o, s) => {
                o != null &&
                    o !== !1 &&
                    (c[s] = i && L.isArray(o) ? o.join(', ') : o)
            }),
            c
        )
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([i, c]) => i + ': ' + c)
            .join(`
`)
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders'
    }
    static from(i) {
        return i instanceof this ? i : new this(i)
    }
    static concat(i, ...c) {
        const o = new this(i)
        return c.forEach((s) => o.set(s)), o
    }
    static accessor(i) {
        const o = (this[_m] = this[_m] = { accessors: {} }).accessors,
            s = this.prototype
        function f(h) {
            const v = Ku(h)
            o[v] || (Ib(s, h), (o[v] = !0))
        }
        return L.isArray(i) ? i.forEach(f) : f(i), this
    }
}
zt.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization',
])
L.reduceDescriptors(zt.prototype, ({ value: n }, i) => {
    let c = i[0].toUpperCase() + i.slice(1)
    return {
        get: () => n,
        set(o) {
            this[c] = o
        },
    }
})
L.freezeMethods(zt)
function es(n, i) {
    const c = this || li,
        o = i || c,
        s = zt.from(o.headers)
    let f = o.data
    return (
        L.forEach(n, function (v) {
            f = v.call(c, f, s.normalize(), i ? i.status : void 0)
        }),
        s.normalize(),
        f
    )
}
function gy(n) {
    return !!(n && n.__CANCEL__)
}
function Xn(n, i, c) {
    Se.call(this, n ?? 'canceled', Se.ERR_CANCELED, i, c),
        (this.name = 'CanceledError')
}
L.inherits(Xn, Se, { __CANCEL__: !0 })
function by(n, i, c) {
    const o = c.config.validateStatus
    !c.status || !o || o(c.status)
        ? n(c)
        : i(
              new Se(
                  'Request failed with status code ' + c.status,
                  [Se.ERR_BAD_REQUEST, Se.ERR_BAD_RESPONSE][
                      Math.floor(c.status / 100) - 4
                  ],
                  c.config,
                  c.request,
                  c,
              ),
          )
}
function eS(n) {
    const i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n)
    return (i && i[1]) || ''
}
function tS(n, i) {
    n = n || 10
    const c = new Array(n),
        o = new Array(n)
    let s = 0,
        f = 0,
        h
    return (
        (i = i !== void 0 ? i : 1e3),
        function (p) {
            const m = Date.now(),
                g = o[f]
            h || (h = m), (c[s] = p), (o[s] = m)
            let x = f,
                O = 0
            for (; x !== s; ) (O += c[x++]), (x = x % n)
            if (((s = (s + 1) % n), s === f && (f = (f + 1) % n), m - h < i))
                return
            const D = g && m - g
            return D ? Math.round((O * 1e3) / D) : void 0
        }
    )
}
function lS(n, i) {
    let c = 0,
        o = 1e3 / i,
        s,
        f
    const h = (m, g = Date.now()) => {
        ;(c = g),
            (s = null),
            f && (clearTimeout(f), (f = null)),
            n.apply(null, m)
    }
    return [
        (...m) => {
            const g = Date.now(),
                x = g - c
            x >= o
                ? h(m, g)
                : ((s = m),
                  f ||
                      (f = setTimeout(() => {
                          ;(f = null), h(s)
                      }, o - x)))
        },
        () => s && h(s),
    ]
}
const Ar = (n, i, c = 3) => {
        let o = 0
        const s = tS(50, 250)
        return lS((f) => {
            const h = f.loaded,
                v = f.lengthComputable ? f.total : void 0,
                p = h - o,
                m = s(p),
                g = h <= v
            o = h
            const x = {
                loaded: h,
                total: v,
                progress: v ? h / v : void 0,
                bytes: p,
                rate: m || void 0,
                estimated: m && v && g ? (v - h) / m : void 0,
                event: f,
                lengthComputable: v != null,
                [i ? 'download' : 'upload']: !0,
            }
            n(x)
        }, c)
    },
    Um = (n, i) => {
        const c = n != null
        return [(o) => i[0]({ lengthComputable: c, total: n, loaded: o }), i[1]]
    },
    zm =
        (n) =>
        (...i) =>
            L.asap(() => n(...i)),
    aS = At.hasStandardBrowserEnv
        ? ((n, i) => (c) => (
              (c = new URL(c, At.origin)),
              n.protocol === c.protocol &&
                  n.host === c.host &&
                  (i || n.port === c.port)
          ))(
              new URL(At.origin),
              At.navigator && /(msie|trident)/i.test(At.navigator.userAgent),
          )
        : () => !0,
    nS = At.hasStandardBrowserEnv
        ? {
              write(n, i, c, o, s, f) {
                  const h = [n + '=' + encodeURIComponent(i)]
                  L.isNumber(c) &&
                      h.push('expires=' + new Date(c).toGMTString()),
                      L.isString(o) && h.push('path=' + o),
                      L.isString(s) && h.push('domain=' + s),
                      f === !0 && h.push('secure'),
                      (document.cookie = h.join('; '))
              },
              read(n) {
                  const i = document.cookie.match(
                      new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'),
                  )
                  return i ? decodeURIComponent(i[3]) : null
              },
              remove(n) {
                  this.write(n, '', Date.now() - 864e5)
              },
          }
        : {
              write() {},
              read() {
                  return null
              },
              remove() {},
          }
function uS(n) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)
}
function iS(n, i) {
    return i ? n.replace(/\/?\/$/, '') + '/' + i.replace(/^\/+/, '') : n
}
function Sy(n, i, c) {
    let o = !uS(i)
    return (n && o) || c == !1 ? iS(n, i) : i
}
const Nm = (n) => (n instanceof zt ? { ...n } : n)
function Pa(n, i) {
    i = i || {}
    const c = {}
    function o(m, g, x, O) {
        return L.isPlainObject(m) && L.isPlainObject(g)
            ? L.merge.call({ caseless: O }, m, g)
            : L.isPlainObject(g)
              ? L.merge({}, g)
              : L.isArray(g)
                ? g.slice()
                : g
    }
    function s(m, g, x, O) {
        if (L.isUndefined(g)) {
            if (!L.isUndefined(m)) return o(void 0, m, x, O)
        } else return o(m, g, x, O)
    }
    function f(m, g) {
        if (!L.isUndefined(g)) return o(void 0, g)
    }
    function h(m, g) {
        if (L.isUndefined(g)) {
            if (!L.isUndefined(m)) return o(void 0, m)
        } else return o(void 0, g)
    }
    function v(m, g, x) {
        if (x in i) return o(m, g)
        if (x in n) return o(void 0, m)
    }
    const p = {
        url: f,
        method: f,
        data: f,
        baseURL: h,
        transformRequest: h,
        transformResponse: h,
        paramsSerializer: h,
        timeout: h,
        timeoutMessage: h,
        withCredentials: h,
        withXSRFToken: h,
        adapter: h,
        responseType: h,
        xsrfCookieName: h,
        xsrfHeaderName: h,
        onUploadProgress: h,
        onDownloadProgress: h,
        decompress: h,
        maxContentLength: h,
        maxBodyLength: h,
        beforeRedirect: h,
        transport: h,
        httpAgent: h,
        httpsAgent: h,
        cancelToken: h,
        socketPath: h,
        responseEncoding: h,
        validateStatus: v,
        headers: (m, g, x) => s(Nm(m), Nm(g), x, !0),
    }
    return (
        L.forEach(Object.keys(Object.assign({}, n, i)), function (g) {
            const x = p[g] || s,
                O = x(n[g], i[g], g)
            ;(L.isUndefined(O) && x !== v) || (c[g] = O)
        }),
        c
    )
}
const Ey = (n) => {
        const i = Pa({}, n)
        let {
            data: c,
            withXSRFToken: o,
            xsrfHeaderName: s,
            xsrfCookieName: f,
            headers: h,
            auth: v,
        } = i
        ;(i.headers = h = zt.from(h)),
            (i.url = yy(Sy(i.baseURL, i.url), n.params, n.paramsSerializer)),
            v &&
                h.set(
                    'Authorization',
                    'Basic ' +
                        btoa(
                            (v.username || '') +
                                ':' +
                                (v.password
                                    ? unescape(encodeURIComponent(v.password))
                                    : ''),
                        ),
                )
        let p
        if (L.isFormData(c)) {
            if (At.hasStandardBrowserEnv || At.hasStandardBrowserWebWorkerEnv)
                h.setContentType(void 0)
            else if ((p = h.getContentType()) !== !1) {
                const [m, ...g] = p
                    ? p
                          .split(';')
                          .map((x) => x.trim())
                          .filter(Boolean)
                    : []
                h.setContentType([m || 'multipart/form-data', ...g].join('; '))
            }
        }
        if (
            At.hasStandardBrowserEnv &&
            (o && L.isFunction(o) && (o = o(i)), o || (o !== !1 && aS(i.url)))
        ) {
            const m = s && f && nS.read(f)
            m && h.set(s, m)
        }
        return i
    },
    rS = typeof XMLHttpRequest < 'u',
    cS =
        rS &&
        function (n) {
            return new Promise(function (c, o) {
                const s = Ey(n)
                let f = s.data
                const h = zt.from(s.headers).normalize()
                let {
                        responseType: v,
                        onUploadProgress: p,
                        onDownloadProgress: m,
                    } = s,
                    g,
                    x,
                    O,
                    D,
                    A
                function Y() {
                    D && D(),
                        A && A(),
                        s.cancelToken && s.cancelToken.unsubscribe(g),
                        s.signal && s.signal.removeEventListener('abort', g)
                }
                let z = new XMLHttpRequest()
                z.open(s.method.toUpperCase(), s.url, !0),
                    (z.timeout = s.timeout)
                function q() {
                    if (!z) return
                    const $ = zt.from(
                            'getAllResponseHeaders' in z &&
                                z.getAllResponseHeaders(),
                        ),
                        F = {
                            data:
                                !v || v === 'text' || v === 'json'
                                    ? z.responseText
                                    : z.response,
                            status: z.status,
                            statusText: z.statusText,
                            headers: $,
                            config: n,
                            request: z,
                        }
                    by(
                        function (he) {
                            c(he), Y()
                        },
                        function (he) {
                            o(he), Y()
                        },
                        F,
                    ),
                        (z = null)
                }
                'onloadend' in z
                    ? (z.onloadend = q)
                    : (z.onreadystatechange = function () {
                          !z ||
                              z.readyState !== 4 ||
                              (z.status === 0 &&
                                  !(
                                      z.responseURL &&
                                      z.responseURL.indexOf('file:') === 0
                                  )) ||
                              setTimeout(q)
                      }),
                    (z.onabort = function () {
                        z &&
                            (o(
                                new Se(
                                    'Request aborted',
                                    Se.ECONNABORTED,
                                    n,
                                    z,
                                ),
                            ),
                            (z = null))
                    }),
                    (z.onerror = function () {
                        o(new Se('Network Error', Se.ERR_NETWORK, n, z)),
                            (z = null)
                    }),
                    (z.ontimeout = function () {
                        let oe = s.timeout
                            ? 'timeout of ' + s.timeout + 'ms exceeded'
                            : 'timeout exceeded'
                        const F = s.transitional || vy
                        s.timeoutErrorMessage && (oe = s.timeoutErrorMessage),
                            o(
                                new Se(
                                    oe,
                                    F.clarifyTimeoutError
                                        ? Se.ETIMEDOUT
                                        : Se.ECONNABORTED,
                                    n,
                                    z,
                                ),
                            ),
                            (z = null)
                    }),
                    f === void 0 && h.setContentType(null),
                    'setRequestHeader' in z &&
                        L.forEach(h.toJSON(), function (oe, F) {
                            z.setRequestHeader(F, oe)
                        }),
                    L.isUndefined(s.withCredentials) ||
                        (z.withCredentials = !!s.withCredentials),
                    v && v !== 'json' && (z.responseType = s.responseType),
                    m &&
                        (([O, A] = Ar(m, !0)),
                        z.addEventListener('progress', O)),
                    p &&
                        z.upload &&
                        (([x, D] = Ar(p)),
                        z.upload.addEventListener('progress', x),
                        z.upload.addEventListener('loadend', D)),
                    (s.cancelToken || s.signal) &&
                        ((g = ($) => {
                            z &&
                                (o(!$ || $.type ? new Xn(null, n, z) : $),
                                z.abort(),
                                (z = null))
                        }),
                        s.cancelToken && s.cancelToken.subscribe(g),
                        s.signal &&
                            (s.signal.aborted
                                ? g()
                                : s.signal.addEventListener('abort', g)))
                const V = eS(s.url)
                if (V && At.protocols.indexOf(V) === -1) {
                    o(
                        new Se(
                            'Unsupported protocol ' + V + ':',
                            Se.ERR_BAD_REQUEST,
                            n,
                        ),
                    )
                    return
                }
                z.send(f || null)
            })
        },
    oS = (n, i) => {
        const { length: c } = (n = n ? n.filter(Boolean) : [])
        if (i || c) {
            let o = new AbortController(),
                s
            const f = function (m) {
                if (!s) {
                    ;(s = !0), v()
                    const g = m instanceof Error ? m : this.reason
                    o.abort(
                        g instanceof Se
                            ? g
                            : new Xn(g instanceof Error ? g.message : g),
                    )
                }
            }
            let h =
                i &&
                setTimeout(() => {
                    ;(h = null),
                        f(new Se(`timeout ${i} of ms exceeded`, Se.ETIMEDOUT))
                }, i)
            const v = () => {
                n &&
                    (h && clearTimeout(h),
                    (h = null),
                    n.forEach((m) => {
                        m.unsubscribe
                            ? m.unsubscribe(f)
                            : m.removeEventListener('abort', f)
                    }),
                    (n = null))
            }
            n.forEach((m) => m.addEventListener('abort', f))
            const { signal: p } = o
            return (p.unsubscribe = () => L.asap(v)), p
        }
    },
    sS = function* (n, i) {
        let c = n.byteLength
        if (c < i) {
            yield n
            return
        }
        let o = 0,
            s
        for (; o < c; ) (s = o + i), yield n.slice(o, s), (o = s)
    },
    fS = async function* (n, i) {
        for await (const c of dS(n)) yield* sS(c, i)
    },
    dS = async function* (n) {
        if (n[Symbol.asyncIterator]) {
            yield* n
            return
        }
        const i = n.getReader()
        try {
            for (;;) {
                const { done: c, value: o } = await i.read()
                if (c) break
                yield o
            }
        } finally {
            await i.cancel()
        }
    },
    jm = (n, i, c, o) => {
        const s = fS(n, i)
        let f = 0,
            h,
            v = (p) => {
                h || ((h = !0), o && o(p))
            }
        return new ReadableStream(
            {
                async pull(p) {
                    try {
                        const { done: m, value: g } = await s.next()
                        if (m) {
                            v(), p.close()
                            return
                        }
                        let x = g.byteLength
                        if (c) {
                            let O = (f += x)
                            c(O)
                        }
                        p.enqueue(new Uint8Array(g))
                    } catch (m) {
                        throw (v(m), m)
                    }
                },
                cancel(p) {
                    return v(p), s.return()
                },
            },
            { highWaterMark: 2 },
        )
    },
    Nr =
        typeof fetch == 'function' &&
        typeof Request == 'function' &&
        typeof Response == 'function',
    Ry = Nr && typeof ReadableStream == 'function',
    hS =
        Nr &&
        (typeof TextEncoder == 'function'
            ? (
                  (n) => (i) =>
                      n.encode(i)
              )(new TextEncoder())
            : async (n) => new Uint8Array(await new Response(n).arrayBuffer())),
    Ty = (n, ...i) => {
        try {
            return !!n(...i)
        } catch {
            return !1
        }
    },
    mS =
        Ry &&
        Ty(() => {
            let n = !1
            const i = new Request(At.origin, {
                body: new ReadableStream(),
                method: 'POST',
                get duplex() {
                    return (n = !0), 'half'
                },
            }).headers.has('Content-Type')
            return n && !i
        }),
    Lm = 64 * 1024,
    cs = Ry && Ty(() => L.isReadableStream(new Response('').body)),
    Or = { stream: cs && ((n) => n.body) }
Nr &&
    ((n) => {
        ;['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((i) => {
            !Or[i] &&
                (Or[i] = L.isFunction(n[i])
                    ? (c) => c[i]()
                    : (c, o) => {
                          throw new Se(
                              `Response type '${i}' is not supported`,
                              Se.ERR_NOT_SUPPORT,
                              o,
                          )
                      })
        })
    })(new Response())
const yS = async (n) => {
        if (n == null) return 0
        if (L.isBlob(n)) return n.size
        if (L.isSpecCompliantForm(n))
            return (
                await new Request(At.origin, {
                    method: 'POST',
                    body: n,
                }).arrayBuffer()
            ).byteLength
        if (L.isArrayBufferView(n) || L.isArrayBuffer(n)) return n.byteLength
        if ((L.isURLSearchParams(n) && (n = n + ''), L.isString(n)))
            return (await hS(n)).byteLength
    },
    vS = async (n, i) => {
        const c = L.toFiniteNumber(n.getContentLength())
        return c ?? yS(i)
    },
    pS =
        Nr &&
        (async (n) => {
            let {
                url: i,
                method: c,
                data: o,
                signal: s,
                cancelToken: f,
                timeout: h,
                onDownloadProgress: v,
                onUploadProgress: p,
                responseType: m,
                headers: g,
                withCredentials: x = 'same-origin',
                fetchOptions: O,
            } = Ey(n)
            m = m ? (m + '').toLowerCase() : 'text'
            let D = oS([s, f && f.toAbortSignal()], h),
                A
            const Y =
                D &&
                D.unsubscribe &&
                (() => {
                    D.unsubscribe()
                })
            let z
            try {
                if (
                    p &&
                    mS &&
                    c !== 'get' &&
                    c !== 'head' &&
                    (z = await vS(g, o)) !== 0
                ) {
                    let F = new Request(i, {
                            method: 'POST',
                            body: o,
                            duplex: 'half',
                        }),
                        C
                    if (
                        (L.isFormData(o) &&
                            (C = F.headers.get('content-type')) &&
                            g.setContentType(C),
                        F.body)
                    ) {
                        const [he, be] = Um(z, Ar(zm(p)))
                        o = jm(F.body, Lm, he, be)
                    }
                }
                L.isString(x) || (x = x ? 'include' : 'omit')
                const q = 'credentials' in Request.prototype
                A = new Request(i, {
                    ...O,
                    signal: D,
                    method: c.toUpperCase(),
                    headers: g.normalize().toJSON(),
                    body: o,
                    duplex: 'half',
                    credentials: q ? x : void 0,
                })
                let V = await fetch(A)
                const $ = cs && (m === 'stream' || m === 'response')
                if (cs && (v || ($ && Y))) {
                    const F = {}
                    ;['status', 'statusText', 'headers'].forEach((k) => {
                        F[k] = V[k]
                    })
                    const C = L.toFiniteNumber(V.headers.get('content-length')),
                        [he, be] = (v && Um(C, Ar(zm(v), !0))) || []
                    V = new Response(
                        jm(V.body, Lm, he, () => {
                            be && be(), Y && Y()
                        }),
                        F,
                    )
                }
                m = m || 'text'
                let oe = await Or[L.findKey(Or, m) || 'text'](V, n)
                return (
                    !$ && Y && Y(),
                    await new Promise((F, C) => {
                        by(F, C, {
                            data: oe,
                            headers: zt.from(V.headers),
                            status: V.status,
                            statusText: V.statusText,
                            config: n,
                            request: A,
                        })
                    })
                )
            } catch (q) {
                throw (
                    (Y && Y(),
                    q && q.name === 'TypeError' && /fetch/i.test(q.message)
                        ? Object.assign(
                              new Se('Network Error', Se.ERR_NETWORK, n, A),
                              { cause: q.cause || q },
                          )
                        : Se.from(q, q && q.code, n, A))
                )
            }
        }),
    os = { http: Ub, xhr: cS, fetch: pS }
L.forEach(os, (n, i) => {
    if (n) {
        try {
            Object.defineProperty(n, 'name', { value: i })
        } catch {}
        Object.defineProperty(n, 'adapterName', { value: i })
    }
})
const Hm = (n) => `- ${n}`,
    gS = (n) => L.isFunction(n) || n === null || n === !1,
    xy = {
        getAdapter: (n) => {
            n = L.isArray(n) ? n : [n]
            const { length: i } = n
            let c, o
            const s = {}
            for (let f = 0; f < i; f++) {
                c = n[f]
                let h
                if (
                    ((o = c),
                    !gS(c) &&
                        ((o = os[(h = String(c)).toLowerCase()]), o === void 0))
                )
                    throw new Se(`Unknown adapter '${h}'`)
                if (o) break
                s[h || '#' + f] = o
            }
            if (!o) {
                const f = Object.entries(s).map(
                    ([v, p]) =>
                        `adapter ${v} ` +
                        (p === !1
                            ? 'is not supported by the environment'
                            : 'is not available in the build'),
                )
                let h = i
                    ? f.length > 1
                        ? `since :
` +
                          f.map(Hm).join(`
`)
                        : ' ' + Hm(f[0])
                    : 'as no adapter specified'
                throw new Se(
                    'There is no suitable adapter to dispatch the request ' + h,
                    'ERR_NOT_SUPPORT',
                )
            }
            return o
        },
        adapters: os,
    }
function ts(n) {
    if (
        (n.cancelToken && n.cancelToken.throwIfRequested(),
        n.signal && n.signal.aborted)
    )
        throw new Xn(null, n)
}
function Bm(n) {
    return (
        ts(n),
        (n.headers = zt.from(n.headers)),
        (n.data = es.call(n, n.transformRequest)),
        ['post', 'put', 'patch'].indexOf(n.method) !== -1 &&
            n.headers.setContentType('application/x-www-form-urlencoded', !1),
        xy
            .getAdapter(n.adapter || li.adapter)(n)
            .then(
                function (o) {
                    return (
                        ts(n),
                        (o.data = es.call(n, n.transformResponse, o)),
                        (o.headers = zt.from(o.headers)),
                        o
                    )
                },
                function (o) {
                    return (
                        gy(o) ||
                            (ts(n),
                            o &&
                                o.response &&
                                ((o.response.data = es.call(
                                    n,
                                    n.transformResponse,
                                    o.response,
                                )),
                                (o.response.headers = zt.from(
                                    o.response.headers,
                                )))),
                        Promise.reject(o)
                    )
                },
            )
    )
}
const Ay = '1.8.1',
    jr = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    (n, i) => {
        jr[n] = function (o) {
            return typeof o === n || 'a' + (i < 1 ? 'n ' : ' ') + n
        }
    },
)
const qm = {}
jr.transitional = function (i, c, o) {
    function s(f, h) {
        return (
            '[Axios v' +
            Ay +
            "] Transitional option '" +
            f +
            "'" +
            h +
            (o ? '. ' + o : '')
        )
    }
    return (f, h, v) => {
        if (i === !1)
            throw new Se(
                s(h, ' has been removed' + (c ? ' in ' + c : '')),
                Se.ERR_DEPRECATED,
            )
        return (
            c &&
                !qm[h] &&
                ((qm[h] = !0),
                console.warn(
                    s(
                        h,
                        ' has been deprecated since v' +
                            c +
                            ' and will be removed in the near future',
                    ),
                )),
            i ? i(f, h, v) : !0
        )
    }
}
jr.spelling = function (i) {
    return (c, o) => (console.warn(`${o} is likely a misspelling of ${i}`), !0)
}
function bS(n, i, c) {
    if (typeof n != 'object')
        throw new Se('options must be an object', Se.ERR_BAD_OPTION_VALUE)
    const o = Object.keys(n)
    let s = o.length
    for (; s-- > 0; ) {
        const f = o[s],
            h = i[f]
        if (h) {
            const v = n[f],
                p = v === void 0 || h(v, f, n)
            if (p !== !0)
                throw new Se(
                    'option ' + f + ' must be ' + p,
                    Se.ERR_BAD_OPTION_VALUE,
                )
            continue
        }
        if (c !== !0) throw new Se('Unknown option ' + f, Se.ERR_BAD_OPTION)
    }
}
const Er = { assertOptions: bS, validators: jr },
    Tl = Er.validators
let Wa = class {
    constructor(i) {
        ;(this.defaults = i),
            (this.interceptors = { request: new Cm(), response: new Cm() })
    }
    async request(i, c) {
        try {
            return await this._request(i, c)
        } catch (o) {
            if (o instanceof Error) {
                let s = {}
                Error.captureStackTrace
                    ? Error.captureStackTrace(s)
                    : (s = new Error())
                const f = s.stack ? s.stack.replace(/^.+\n/, '') : ''
                try {
                    o.stack
                        ? f &&
                          !String(o.stack).endsWith(
                              f.replace(/^.+\n.+\n/, ''),
                          ) &&
                          (o.stack +=
                              `
` + f)
                        : (o.stack = f)
                } catch {}
            }
            throw o
        }
    }
    _request(i, c) {
        typeof i == 'string' ? ((c = c || {}), (c.url = i)) : (c = i || {}),
            (c = Pa(this.defaults, c))
        const { transitional: o, paramsSerializer: s, headers: f } = c
        o !== void 0 &&
            Er.assertOptions(
                o,
                {
                    silentJSONParsing: Tl.transitional(Tl.boolean),
                    forcedJSONParsing: Tl.transitional(Tl.boolean),
                    clarifyTimeoutError: Tl.transitional(Tl.boolean),
                },
                !1,
            ),
            s != null &&
                (L.isFunction(s)
                    ? (c.paramsSerializer = { serialize: s })
                    : Er.assertOptions(
                          s,
                          { encode: Tl.function, serialize: Tl.function },
                          !0,
                      )),
            c.allowAbsoluteUrls !== void 0 ||
                (this.defaults.allowAbsoluteUrls !== void 0
                    ? (c.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                    : (c.allowAbsoluteUrls = !0)),
            Er.assertOptions(
                c,
                {
                    baseUrl: Tl.spelling('baseURL'),
                    withXsrfToken: Tl.spelling('withXSRFToken'),
                },
                !0,
            ),
            (c.method = (
                c.method ||
                this.defaults.method ||
                'get'
            ).toLowerCase())
        let h = f && L.merge(f.common, f[c.method])
        f &&
            L.forEach(
                ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                (A) => {
                    delete f[A]
                },
            ),
            (c.headers = zt.concat(h, f))
        const v = []
        let p = !0
        this.interceptors.request.forEach(function (Y) {
            ;(typeof Y.runWhen == 'function' && Y.runWhen(c) === !1) ||
                ((p = p && Y.synchronous), v.unshift(Y.fulfilled, Y.rejected))
        })
        const m = []
        this.interceptors.response.forEach(function (Y) {
            m.push(Y.fulfilled, Y.rejected)
        })
        let g,
            x = 0,
            O
        if (!p) {
            const A = [Bm.bind(this), void 0]
            for (
                A.unshift.apply(A, v),
                    A.push.apply(A, m),
                    O = A.length,
                    g = Promise.resolve(c);
                x < O;

            )
                g = g.then(A[x++], A[x++])
            return g
        }
        O = v.length
        let D = c
        for (x = 0; x < O; ) {
            const A = v[x++],
                Y = v[x++]
            try {
                D = A(D)
            } catch (z) {
                Y.call(this, z)
                break
            }
        }
        try {
            g = Bm.call(this, D)
        } catch (A) {
            return Promise.reject(A)
        }
        for (x = 0, O = m.length; x < O; ) g = g.then(m[x++], m[x++])
        return g
    }
    getUri(i) {
        i = Pa(this.defaults, i)
        const c = Sy(i.baseURL, i.url, i.allowAbsoluteUrls)
        return yy(c, i.params, i.paramsSerializer)
    }
}
L.forEach(['delete', 'get', 'head', 'options'], function (i) {
    Wa.prototype[i] = function (c, o) {
        return this.request(
            Pa(o || {}, { method: i, url: c, data: (o || {}).data }),
        )
    }
})
L.forEach(['post', 'put', 'patch'], function (i) {
    function c(o) {
        return function (f, h, v) {
            return this.request(
                Pa(v || {}, {
                    method: i,
                    headers: o ? { 'Content-Type': 'multipart/form-data' } : {},
                    url: f,
                    data: h,
                }),
            )
        }
    }
    ;(Wa.prototype[i] = c()), (Wa.prototype[i + 'Form'] = c(!0))
})
let SS = class Oy {
    constructor(i) {
        if (typeof i != 'function')
            throw new TypeError('executor must be a function.')
        let c
        this.promise = new Promise(function (f) {
            c = f
        })
        const o = this
        this.promise.then((s) => {
            if (!o._listeners) return
            let f = o._listeners.length
            for (; f-- > 0; ) o._listeners[f](s)
            o._listeners = null
        }),
            (this.promise.then = (s) => {
                let f
                const h = new Promise((v) => {
                    o.subscribe(v), (f = v)
                }).then(s)
                return (
                    (h.cancel = function () {
                        o.unsubscribe(f)
                    }),
                    h
                )
            }),
            i(function (f, h, v) {
                o.reason || ((o.reason = new Xn(f, h, v)), c(o.reason))
            })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(i) {
        if (this.reason) {
            i(this.reason)
            return
        }
        this._listeners ? this._listeners.push(i) : (this._listeners = [i])
    }
    unsubscribe(i) {
        if (!this._listeners) return
        const c = this._listeners.indexOf(i)
        c !== -1 && this._listeners.splice(c, 1)
    }
    toAbortSignal() {
        const i = new AbortController(),
            c = (o) => {
                i.abort(o)
            }
        return (
            this.subscribe(c),
            (i.signal.unsubscribe = () => this.unsubscribe(c)),
            i.signal
        )
    }
    static source() {
        let i
        return {
            token: new Oy(function (s) {
                i = s
            }),
            cancel: i,
        }
    }
}
function ES(n) {
    return function (c) {
        return n.apply(null, c)
    }
}
function RS(n) {
    return L.isObject(n) && n.isAxiosError === !0
}
const ss = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
}
Object.entries(ss).forEach(([n, i]) => {
    ss[i] = n
})
function Dy(n) {
    const i = new Wa(n),
        c = ny(Wa.prototype.request, i)
    return (
        L.extend(c, Wa.prototype, i, { allOwnKeys: !0 }),
        L.extend(c, i, null, { allOwnKeys: !0 }),
        (c.create = function (s) {
            return Dy(Pa(n, s))
        }),
        c
    )
}
const Ze = Dy(li)
Ze.Axios = Wa
Ze.CanceledError = Xn
Ze.CancelToken = SS
Ze.isCancel = gy
Ze.VERSION = Ay
Ze.toFormData = zr
Ze.AxiosError = Se
Ze.Cancel = Ze.CanceledError
Ze.all = function (i) {
    return Promise.all(i)
}
Ze.spread = ES
Ze.isAxiosError = RS
Ze.mergeConfig = Pa
Ze.AxiosHeaders = zt
Ze.formToJSON = (n) => py(L.isHTMLForm(n) ? new FormData(n) : n)
Ze.getAdapter = xy.getAdapter
Ze.HttpStatusCode = ss
Ze.default = Ze
const {
        Axios: GS,
        AxiosError: XS,
        CanceledError: VS,
        isCancel: QS,
        CancelToken: ZS,
        VERSION: KS,
        all: kS,
        Cancel: JS,
        isAxiosError: FS,
        spread: $S,
        toFormData: WS,
        AxiosHeaders: PS,
        HttpStatusCode: IS,
        formToJSON: e1,
        getAdapter: t1,
        mergeConfig: l1,
    } = Ze,
    Lr = 'http://localhost:3001/companies',
    TS = async () => {
        try {
            const n = await Ze.get(Lr)
            return Array.isArray(n.data) ? n.data : []
        } catch (n) {
            return console.error('GET error', n), []
        }
    },
    xS = (n) =>
        Ze.post(Lr, n)
            .then((c) => c.data)
            .catch((c) => {
                console.error('POST error', c)
            }),
    AS = (n, i) =>
        Ze.put(`${Lr}/${n}`, i)
            .then((o) => o.data)
            .catch((o) => {
                console.error('PUT error', o)
            }),
    OS = (n) => {
        Ze.delete(`${Lr}/${n}`)
            .then((i) => i.data)
            .catch((i) => {
                console.error('DELETE error', i)
            })
    },
    Os = { getAll: TS, create: xS, update: AS, remove: OS },
    DS = ({ columnKey: n, onSortChange: i, label: c }) => {
        const [o, s] = _.useState(null),
            f = () => {
                const h = o === 'asc' ? 'desc' : 'asc'
                s(h), i(n, h)
            }
        return H.jsxs('span', {
            className: 'sortable-header',
            onClick: f,
            children: [
                c,
                H.jsx('span', {
                    className: 'sort-icon',
                    children: o === 'asc' ? '🔼' : o === 'desc' ? '🔽' : '↕',
                }),
            ],
        })
    },
    wy = () => {
        const [n, i] = _.useState([]),
            [c, o] = _.useState('')
        _.useEffect(() => {
            Os.getAll()
                .then((h) => {
                    i(h || [])
                })
                .catch((h) => console.error('Error fetching companies:', h))
        }, [])
        const s = (h, v) => {
                const p = [...n].sort((m, g) => {
                    var D, A
                    let x =
                            ((D = m[h]) == null ? void 0 : D.toLowerCase()) ||
                            '',
                        O =
                            ((A = g[h]) == null ? void 0 : A.toLowerCase()) ||
                            ''
                    return v === 'asc' ? x.localeCompare(O) : O.localeCompare(x)
                })
                i(p)
            },
            f = n.filter((h) => h.name.toLowerCase().includes(c.toLowerCase()))
        return H.jsxs('div', {
            className: 'company-list',
            children: [
                H.jsx('h2', { children: 'Companies' }),
                H.jsx('input', {
                    type: 'text',
                    placeholder: 'Search by company name...',
                    value: c,
                    onChange: (h) => o(h.target.value),
                    className: 'search-input',
                }),
                H.jsxs('table', {
                    className: 'company-table',
                    children: [
                        H.jsx('thead', {
                            children: H.jsxs('tr', {
                                className: 'header-row',
                                children: [
                                    H.jsx('th', {
                                        children: H.jsx(DS, {
                                            label: 'Name',
                                            columnKey: 'name',
                                            onSortChange: s,
                                        }),
                                    }),
                                    H.jsx('th', { children: 'Status' }),
                                    H.jsx('th', {
                                        children: 'Application URL',
                                    }),
                                    H.jsx('th', { children: 'Notes' }),
                                    H.jsx('th', {
                                        children: 'Point of Contacts',
                                    }),
                                ],
                            }),
                        }),
                        H.jsx('tbody', {
                            children: f.map((h, v) =>
                                H.jsxs(
                                    'tr',
                                    {
                                        className: 'data-rows',
                                        children: [
                                            H.jsx('td', { children: h.name }),
                                            H.jsx('td', { children: h.status }),
                                            H.jsx('td', {
                                                children: H.jsx('a', {
                                                    href: h.applicationUrl,
                                                    target: '_blank',
                                                    rel: 'noopener noreferrer',
                                                    children: h.applicationUrl,
                                                }),
                                            }),
                                            H.jsx('td', {
                                                children:
                                                    h.notes ||
                                                    'No notes available',
                                            }),
                                            H.jsx('td', {
                                                children:
                                                    h.pointOfContacts &&
                                                    h.pointOfContacts.length > 0
                                                        ? h.pointOfContacts.join(
                                                              ', ',
                                                          )
                                                        : 'No contacts available',
                                            }),
                                        ],
                                    },
                                    v,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        })
    },
    wS = 'http://localhost:3001',
    MS = async () => {
        try {
            const n = await Ze.get(`${wS}/all-contacts`)
            return Array.isArray(n.data.allContacts) ? n.data.allContacts : []
        } catch (n) {
            return console.error('GET error with contacts', n), []
        }
    },
    CS = { getAll: MS },
    _S = () => {
        const [n, i] = _.useState([])
        return (
            _.useEffect(() => {
                CS.getAll()
                    .then((c) => {
                        i(c || [])
                    })
                    .catch((c) => console.error('Error fetching companies:', c))
            }, []),
            H.jsxs('div', {
                children: [
                    H.jsx('h2', {
                        className: 'contacts-header',
                        children: 'Points of Contact',
                    }),
                    H.jsx('ul', {
                        className: 'contacts-list',
                        children: n.map((c, o) =>
                            H.jsx(
                                'li',
                                { className: 'contacts-items', children: c },
                                o,
                            ),
                        ),
                    }),
                ],
            })
        )
    },
    US = () => {
        const [n, i] = _.useState(''),
            [c, o] = _.useState(''),
            [s, f] = _.useState(''),
            [h, v] = _.useState(''),
            [p, m] = _.useState(''),
            g = (z) => {
                i(z.target.value)
            },
            x = (z) => {
                o(z.target.value)
            },
            O = (z) => {
                f(z.target.value)
            },
            D = (z) => {
                v(z.target.value)
            },
            A = (z) => {
                m(z.target.value)
            },
            Y = (z) => {
                z.preventDefault()
                const q = {
                    name: n,
                    status: c,
                    applicationUrl: s,
                    notes: h,
                    pointOfContact: p,
                }
                Os.create(q).then(() => {
                    i(''), o(''), f(''), v(''), m('')
                })
            }
        return H.jsx('div', {
            id: 'form-container',
            children: H.jsxs('form', {
                onSubmit: Y,
                id: 'add-company-form',
                children: [
                    H.jsx('div', {
                        id: 'heading-container',
                        children: H.jsx('h2', {
                            id: 'form-heading',
                            children: 'Add new Company',
                        }),
                    }),
                    H.jsxs('div', {
                        className: 'form-field-container',
                        children: [
                            H.jsx('label', {
                                htmlFor: 'form-company-name',
                                children: 'Name',
                            }),
                            H.jsx('input', {
                                id: 'form-company-name',
                                type: 'text',
                                placeholder: 'Name',
                                value: n,
                                onChange: g,
                            }),
                        ],
                    }),
                    H.jsxs('div', {
                        className: 'form-field-container',
                        children: [
                            H.jsx('label', {
                                htmlFor: 'form-company-status',
                                children: 'Status',
                            }),
                            H.jsxs('select', {
                                name: 'form-company-status',
                                id: 'form-company-status',
                                onChange: x,
                                children: [
                                    H.jsx('option', {
                                        value: '',
                                        children: '--Please choose an option--',
                                    }),
                                    H.jsx('option', {
                                        value: 'hiring',
                                        children: 'Hiring',
                                    }),
                                    H.jsx('option', {
                                        value: 'interested',
                                        children: 'Interested',
                                    }),
                                    H.jsx('option', {
                                        value: 'interviewing',
                                        children: 'Interviewing',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    H.jsxs('div', {
                        className: 'form-field-container',
                        children: [
                            H.jsx('label', {
                                htmlFor: 'form-company-url',
                                children: 'Application URL',
                            }),
                            H.jsx('input', {
                                id: 'form-company-url',
                                type: 'url',
                                placeholder: 'Application URL',
                                value: s,
                                onChange: O,
                            }),
                        ],
                    }),
                    H.jsxs('div', {
                        className: 'form-field-container',
                        children: [
                            H.jsx('label', {
                                htmlFor: 'form-company-contacts',
                                children: 'Points of Contact',
                            }),
                            H.jsx('input', {
                                id: 'form-company-contacts',
                                type: 'text',
                                placeholder: 'Points of Contact',
                                value: p,
                                onChange: A,
                            }),
                        ],
                    }),
                    H.jsxs('div', {
                        className: 'form-field-container',
                        children: [
                            H.jsx('label', {
                                htmlFor: 'form-company-notes',
                                children: 'Notes',
                            }),
                            H.jsx('textarea', {
                                id: 'form-company-notes',
                                type: 'text',
                                placeholder: 'Notes',
                                value: h,
                                onChange: D,
                            }),
                        ],
                    }),
                    H.jsx('div', {
                        id: 'form-button-container',
                        children: H.jsx('button', {
                            id: 'add-company-form-button',
                            children: 'Add Company',
                        }),
                    }),
                ],
            }),
        })
    }
function zS() {
    const [n, i] = _.useState([]),
        { darkMode: c, setDarkMode: o } = _.useContext(Jl)
    return (
        _.useEffect(() => {
            ;(async () => {
                const f = await Os.getAll()
                i(f)
            })()
        }, []),
        H.jsxs('div', {
            className: c ? 'app-dark' : 'app-light',
            children: [
                H.jsx(Yn, { darkMode: c, setDarkMode: o }),
                H.jsx(wy, { data: n }),
            ],
        })
    )
}
const NS = () => {
        const { darkMode: n } = _.useContext(Jl)
        return H.jsxs('div', {
            style: {
                backgroundColor: n ? '#A9A9A9' : '#ffffff',
                color: n ? '#ffffff' : '#000000',
            },
            children: [H.jsx(Yn, {}), H.jsx(US, {}), H.jsx(wy, {})],
        })
    },
    jS = () => {
        const { darkMode: n } = _.useContext(Jl)
        return H.jsxs('div', {
            style: {
                backgroundColor: n ? '#A9A9A9' : '#ffffff',
                color: n ? '#ffffff' : '#000000',
            },
            children: [H.jsx(Yn, {}), H.jsx(_S, {})],
        })
    },
    ku = () => {
        const { darkMode: n } = _.useContext(Jl)
        return H.jsxs('div', {
            style: {
                backgroundColor: n ? '#A9A9A9' : '#ffffff',
                color: n ? '#ffffff' : '#000000',
            },
            children: [
                H.jsx(Yn, {}),
                H.jsx('div', { children: 'NotFound Page' }),
            ],
        })
    },
    LS = () => {
        const { darkMode: n } = _.useContext(Jl),
            { login: i } = _.useContext(Mr),
            [c, o] = _.useState(''),
            [s, f] = _.useState(''),
            [h, v] = _.useState(''),
            p = 'http://localhost:3001/sign-up',
            m = async (g) => {
                g.preventDefault()
                const x = { email: c, password: s, username: h }
                try {
                    const O = await fetch(p, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(x),
                    })
                    if (O.ok) {
                        const D = await O.json(),
                            A = D.token
                        console.log(D),
                            A
                                ? i(
                                      A,
                                      D.user.username,
                                      'Account created successfully!',
                                  )
                                : console.error(
                                      'No token found in the response',
                                  )
                    } else {
                        const D = await O.json()
                        console.error('Error signing up:', D),
                            alert(`Error signing up: ${D.message}`)
                    }
                } catch (O) {
                    console.error('Network error:', O),
                        alert('Network error', O)
                }
            }
        return H.jsxs('div', {
            style: {
                backgroundColor: n ? '#A9A9A9' : '#ffffff',
                color: n ? '#ffffff' : '#000000',
            },
            children: [
                H.jsx(Yn, {}),
                H.jsxs('div', {
                    className: 'signup-container',
                    children: [
                        H.jsx('h2', {
                            className: 'signup-title',
                            children: 'Sign Up',
                        }),
                        H.jsxs('form', {
                            className: 'signup-form',
                            onSubmit: m,
                            children: [
                                H.jsxs('div', {
                                    className: 'form-group',
                                    children: [
                                        H.jsx('label', {
                                            htmlFor: 'username',
                                            children: 'Username',
                                        }),
                                        H.jsx('input', {
                                            type: 'text',
                                            id: 'username',
                                            name: 'username',
                                            placeholder: 'Enter your username',
                                            className: 'input-field',
                                            required: !0,
                                            value: h,
                                            onChange: (g) => v(g.target.value),
                                        }),
                                    ],
                                }),
                                H.jsxs('div', {
                                    className: 'form-group',
                                    children: [
                                        H.jsx('label', {
                                            htmlFor: 'email',
                                            children: 'Email',
                                        }),
                                        H.jsx('input', {
                                            type: 'email',
                                            id: 'email',
                                            name: 'email',
                                            placeholder: 'Enter your email',
                                            className: 'input-field',
                                            value: c,
                                            onChange: (g) => o(g.target.value),
                                            required: !0,
                                        }),
                                    ],
                                }),
                                H.jsxs('div', {
                                    className: 'form-group',
                                    children: [
                                        H.jsx('label', {
                                            htmlFor: 'password',
                                            children: 'Password',
                                        }),
                                        H.jsx('input', {
                                            type: 'password',
                                            id: 'password',
                                            name: 'password',
                                            placeholder: 'Enter your password',
                                            className: 'input-field',
                                            value: s,
                                            onChange: (g) => f(g.target.value),
                                            required: !0,
                                        }),
                                    ],
                                }),
                                H.jsx('button', {
                                    type: 'submit',
                                    className: 'submit-button',
                                    children: 'Sign Up',
                                }),
                            ],
                        }),
                    ],
                }),
                H.jsx('style', {
                    jsx: !0,
                    children: `
                .signup-container {
                    max-width: 400px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #f8f8f8;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .signup-title {
                    text-align: center;
                    font-size: 24px;
                    margin-bottom: 20px;
                    color: #333;
                }

                .signup-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                label {
                    font-size: 14px;
                    color: #555;
                }

                .input-field {
                    padding: 10px;
                    font-size: 14px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    outline: none;
                    width: 100%;
                    box-sizing: border-box;
                }

                .input-field:focus {
                    border-color: #007bff;
                }

                .submit-button {
                    padding: 12px;
                    background-color: #007bff;
                    color: white;
                    font-size: 16px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .submit-button:hover {
                    background-color: #0056b3;
                }
            `,
                }),
            ],
        })
    },
    HS = () => {
        const { login: n } = _.useContext(Mr),
            [i, c] = _.useState(''),
            [o, s] = _.useState(''),
            f = 'http://localhost:3001/login',
            { darkMode: h } = _.useContext(Jl),
            v = async (p) => {
                p.preventDefault()
                const m = { email: i, password: o }
                try {
                    const g = await fetch(f, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(m),
                    })
                    if (g.ok) {
                        const x = await g.json(),
                            O = x.token
                        O
                            ? n(
                                  O,
                                  x.user.username,
                                  'Account logged in successfully!',
                              )
                            : console.error('No token found in the response')
                    } else {
                        const x = await g.json()
                        console.error('Error logging in:', x),
                            alert(`Error logging in: ${x.message}`)
                    }
                } catch (g) {
                    console.error('Network error:', g),
                        alert('Network error', g)
                }
            }
        return H.jsxs('div', {
            style: {
                backgroundColor: h ? '#A9A9A9' : '#ffffff',
                color: h ? '#ffffff' : '#000000',
            },
            children: [
                H.jsx(Yn, {}),
                H.jsxs('div', {
                    className: 'login-container',
                    children: [
                        H.jsx('h2', {
                            className: 'login-title',
                            children: 'Login',
                        }),
                        H.jsxs('form', {
                            className: 'login-form',
                            onSubmit: v,
                            children: [
                                H.jsxs('div', {
                                    className: 'form-group',
                                    children: [
                                        H.jsx('label', {
                                            htmlFor: 'email',
                                            children: 'Email',
                                        }),
                                        H.jsx('input', {
                                            type: 'email',
                                            id: 'email',
                                            name: 'email',
                                            placeholder: 'Enter your email',
                                            className: 'input-field',
                                            value: i,
                                            onChange: (p) => c(p.target.value),
                                            required: !0,
                                        }),
                                    ],
                                }),
                                H.jsxs('div', {
                                    className: 'form-group',
                                    children: [
                                        H.jsx('label', {
                                            htmlFor: 'password',
                                            children: 'Password',
                                        }),
                                        H.jsx('input', {
                                            type: 'password',
                                            id: 'password',
                                            name: 'password',
                                            placeholder: 'Enter your password',
                                            className: 'input-field',
                                            value: o,
                                            onChange: (p) => s(p.target.value),
                                            required: !0,
                                        }),
                                    ],
                                }),
                                H.jsx('button', {
                                    type: 'submit',
                                    className: 'submit-button',
                                    children: 'Login',
                                }),
                            ],
                        }),
                    ],
                }),
                H.jsx('style', {
                    jsx: !0,
                    children: `
                .login-container {
                    max-width: 400px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #f8f8f8;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .login-title {
                    text-align: center;
                    font-size: 24px;
                    margin-bottom: 20px;
                    color: #333;
                }

                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                label {
                    font-size: 14px;
                    color: #555;
                }

                .input-field {
                    padding: 10px;
                    font-size: 14px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    outline: none;
                    width: 100%;
                    box-sizing: border-box;
                }

                .input-field:focus {
                    border-color: #007bff;
                }

                .submit-button {
                    padding: 12px;
                    background-color: #007bff;
                    color: white;
                    font-size: 16px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .submit-button:hover {
                    background-color: #0056b3;
                }
            `,
                }),
            ],
        })
    },
    BS = Ug([
        { path: '/', element: H.jsx(zS, {}), errorElement: H.jsx(ku, {}) },
        {
            path: '/hitlist',
            element: H.jsx(NS, {}),
            errorElement: H.jsx(ku, {}),
        },
        {
            path: '/contacts',
            element: H.jsx(jS, {}),
            errorElement: H.jsx(ku, {}),
        },
        { path: '/login', element: H.jsx(HS, {}), errorElement: H.jsx(ku, {}) },
        {
            path: '/signup',
            element: H.jsx(LS, {}),
            errorElement: H.jsx(ku, {}),
        },
    ])
Qv.createRoot(document.getElementById('root')).render(
    H.jsx(_.StrictMode, {
        children: H.jsxs(Zg, {
            children: [
                ' ',
                H.jsx(Kg, {
                    children: H.jsx('div', {
                        children: H.jsx(Qg, { router: BS }),
                    }),
                }),
            ],
        }),
    }),
)
